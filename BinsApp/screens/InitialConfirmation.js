import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'
import {Auth} from 'aws-amplify';
import moment from "moment";

import { LoginContext } from '../components/LoginProvider.js';

export default class InitialConfirmation extends Component {

  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      dateSelected: '',
      timeSelected: '',
      address: '',
      type: '',
    }
  }

  componentDidMount(){
      const dateSelected = this.props.route.params?.dateSelected??'';
      const timeSelected = this.props.route.params?.timeSelected??'';
      const address = this.props.route.params?.address??'';
      const type = this.props.route.params?.type??'';
      this.setState({type});
      this.setState({dateSelected});
      this.setState({timeSelected});
      this.setState({address});
    }

  render() {
    return (
        <View style={styles.container}>
          <Text allowFontScaling={false} style={styles.header}>Your Order Has Been Placed Successfully!</Text>
          <Textbox header='Date'
                   body={moment(this.state.dateSelected).format('MMMM DD, YYYY')}/>
          <Textbox header='Time'
                   body={this.state.timeSelected}/>
          <Textbox header='Address'
                   body={this.state.address}/>
          <Textbox header='Order Type'
                   body={this.state.type}/>
          <View style={{padding: 25}}>
            <LongButton title ="COMPLETE SIGN UP"
                        onPress={() => this.context.completeSignup()
                        .catch((err)=>console.log('error signing up!' + err))}/>
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
  textAlign: 'center',
}

});
