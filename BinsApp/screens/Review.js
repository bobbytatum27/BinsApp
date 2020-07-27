import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'


export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSelected: '',
      timeSelected: '',
    }
  }

  onSubmit() {
    fetch('http://192.168.1.247:5000/orders',{
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
      this.setState({dateSelected});
      this.setState({timeSelected});
    }

  render() {
    return (
      <View style={styles.container}>
        <View style = {{alignItems: 'center'}}>
          <Text style = {styles.header}>Review</Text>
        </View>
        <Textbox header='Date and Time'
                 body={Object.keys(this.state.dateSelected)}
                 body2={this.state.timeSelected}/>
        <Textbox header='Address'
                 body={this.state.addressLine1}
                 body2={this.state.city + ", " + this.state.state + " " + this.state.zip}/>
        <Textbox header='Unit'
                 body=''
                 body2=''/>
        <Textbox header='Total'
                          body=''
                          body2=''/>
        <View style = {{marginTop: 15}}>
          <LongButton
            title="CONFIRM"
            onPress={()=>this.props.navigation.navigate('ConfirmationScreen', {dateSelected: this.state.dateSelected,
                                                                               timeSelected: this.state.timeSelected})}
          />
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
