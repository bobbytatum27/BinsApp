import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'
import { LoginContext } from '../components/LoginProvider.js';
import {Auth} from 'aws-amplify';
import {Url} from '../src/components/url.js';

export default class Review extends Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      dateSelected: '',
      timeSelected: '',
      address: Auth.user.attributes.address,
      email: Auth.user.attributes.email,
      phone: Auth.user.attributes.phone_number,
      selected: '',
      type: '',
      id: '',
      isInStorage: 'In Transit',
    }
  }

  onSubmit() {
    fetch(Url+'orders',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(this.state)
  })}

  onSubmit2() {
    fetch(Url+'/modifybin',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(this.state)
  })}


  componentDidMount(){
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
      console.log(id);
    }

  render() {
    return (
      <View style={styles.container}>
        <View style = {{alignItems: 'center'}}>
          <Text style = {styles.header}>Review</Text>
        </View>
        <Textbox header='Date and Time'
                 body={this.state.dateSelected}
                 body2={this.state.timeSelected}/>
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
              this.onSubmit2();
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
    padding: 25
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
