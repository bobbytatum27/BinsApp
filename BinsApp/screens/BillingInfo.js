import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'
import { CreditCardInput } from 'react-native-credit-card-input'
import { ScrollView } from 'react-native-gesture-handler';
import {Auth} from 'aws-amplify';

import { LoginContext } from '../components/LoginProvider.js';

export default class BillingInfo extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      dateSelected: '',
      timeSelected: '',
      address: Auth.user.attributes.address,
      email: Auth.user.attributes.email,
      phone: Auth.user.attributes.phone_number,
      type: 'Pickup',
      selected: 'Initial',
      nameOnCard: '',
      creditCardNum: '',
      expirationDate: '',
      securityCode: '',
      size: '',
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
  })
}

  componentDidMount(){
      const dateSelected = this.props.route.params?.dateSelected??'';
      const timeSelected = this.props.route.params?.timeSelected??'';
      this.setState({dateSelected: dateSelected, timeSelected: timeSelected});
      Auth.currentUserInfo().then((userInfo) => {
        const { attributes = {} } = userInfo;

        this.setState({size:attributes['custom:size']});
        console.log(this.state);
      })
    }

  render() {
    return (
      <View style={styles.container}>
        <View style = {{alignItems: 'center'}}>
          <Text style = {styles.header}>Review</Text>
        </View>
        <ScrollView>
        <CreditCardInput
          onChange={this._onChange}
          labelStyle={styles.creditCardLabels}
          inputContainerStyle={styles.creditCardInputView}
          inputStyle={{color: 'white'}}
          requiresName={true}
          autoFocus={false}
        />
        <View style = {{alignItems: 'center'}}>
          <Text style = {styles.header}>Review</Text>
        </View>
        <Textbox header='Date and Time'
                 body={this.state.dateSelected}
                 body2={this.state.timeSelected}/>
        <Textbox header='Address'
                 body={this.state.address}/>
        <Textbox header='Total'
                 body={this.state.size}/>
        <View style = {{marginTop: 15}}>
          <LongButton
            title="CONFIRM PICKUP"
            onPress={()=>{
              this.onSubmit();
              this.props.navigation.navigate('InitialConfirmationScreen', {dateSelected: this.state.dateSelected,
                                                                    timeSelected: this.state.timeSelected,
                                                                    address: this.state.address,
                                                                    type: this.state.type})
              }}/>
        </View>
        </ScrollView>
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
  },
  creditCardLabels: {
    color: 'white',
  },
  creditCardInputView: {
    borderColor: '#4826A0',
    borderWidth: 1,
    margin: 15,
    paddingLeft: 5,
    paddingTop: 5
  }

});
