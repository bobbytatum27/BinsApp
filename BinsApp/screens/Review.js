import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'
import { LoginContext } from '../components/LoginProvider.js';
import {Auth} from 'aws-amplify';
import {Url} from '../src/components/url.js';
import moment from "moment";

export default class Review extends Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      dateSelected: '',
      timeSelected: '',
      address: '',
      email: '',
      phone: '',
      selected: '',
      type: '',
      id: '',
      isInStorage: 'In Progress',
    }
  }

  onSubmit() {
    fetch(Url+'/orders',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(this.state)
  })}

  //Changing storage status of an item does not currently work if there are multiple items

  /*onSubmit2() {
    fetch(Url+'/modifybin',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(this.state)
  })}
  */

  componentDidMount(){
    this.fetchData();
    const dateSelected = this.props.route.params?.dateSelected??'';
    const timeSelected = this.props.route.params?.timeSelected??'';
    const selectedArray = this.props.route.params?.selected??'';
    const selected = selectedArray.toString();
    const type = this.props.route.params?.type??'';
    const idArray = this.props.route.params?.id??'';
    const idString = idArray.toString();
    const id = parseInt(idString, 10);
    this.setState({dateSelected});
    this.setState({timeSelected});
    this.setState({selected});
    this.setState({type});
    this.setState({id});
  }

    fetchData(){
      Auth.currentUserInfo().then((userInfo) => {
        const { attributes = {} } = userInfo;
        this.setState({email:attributes['email']});
        this.setState({phone:attributes['phone_number']});
        this.setState({address:attributes['address']});
      })
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={{margin: 10}}/>
        <Textbox header='Date'
                 body={moment(this.state.dateSelected).format('MMMM DD, YYYY')}/>
        <Textbox header='Time'
                 body={this.state.timeSelected}/>
        <Textbox header='Address'
                 body={this.state.address}/>
        <Textbox header='Items'
                 body={this.state.selected}
                 body2={''}/>
        <Textbox header='Order Type'
                body={this.state.type}/>
        <Textbox header='Total'
                          body='$19.99'/>
        <View style = {{marginTop: 15}}>
          <LongButton
            title="CONFIRM"
            onPress={()=>{
              this.onSubmit();
              this.props.navigation.navigate('ConfirmationScreen', {dateSelected: this.state.dateSelected,
                                                                    timeSelected: this.state.timeSelected,
                                                                    address: this.state.address,
                                                                    type: this.state.type})
              }}/>
        </View>
      </View>
    );
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261136',
  },
  userInfoText: {
    borderColor: '#4826A0',
    borderWidth: 1,
    textAlign: 'center',
    color: 'white',
    margin: 15,
    padding: 15,
  },
  descriptionText:{
    marginBottom: -10,
    marginLeft: 15,
    color: 'white',
  },
  questionText: {
    fontSize: 20,
    paddingTop: 15
  },
  header: {
    color: '#AAB5E0',
    fontSize: 25,
    margin: 15,
    justifyContent: 'center',
  }
  });
