import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, TouchableOpacity } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import { LoginContext } from '../components/LoginProvider.js';
import {Auth} from 'aws-amplify';
import { Ionicons } from '@expo/vector-icons';
import {Url} from '../src/components/url.js';

export default class Menu extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      specialInstructions: '',
      nameOnCard: '',
      creditCardNum: '',
      expirationDate: '',
      securityCode: '',
      selectedButton: '',
    }
  }

  onSubmit() {
      this.updateUser()
      fetch(Url+'/modifycustomers',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(this.state)
  })}

  async updateUser() {
    let user = await Auth.currentAuthenticatedUser();

    let result = await Auth.updateUserAttributes(user, {
      'name': this.state.name,
      'phone_number': this.state.phone,
      'address': this.state.address,
      'custom:specialInstructions': this.state.specialInstructions,
    });
      }

  componentDidMount(){
    Auth.currentUserInfo().then((userInfo) => {
      const { attributes = {} } = userInfo;
      this.setState({name:attributes['name']});
      this.setState({email:attributes['email']});
      this.setState({phone:attributes['phone_number']});
      this.setState({address:attributes['address']});
      this.setState({specialInstructions:attributes['custom:specialInstructions']});
      this.setState({selectedButton:attributes['custom:size']});
    })
  }

  render() {
    return (
      <View style={styles.container}>
          <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex:1}}>
            <Text style={styles.bins}>Bins</Text>
          </View>
          <View style={{flex:1}}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('ViewProfile')}>
              <Text style={{color: 'white', fontSize: 20}}>Account Information</Text>
              <Text style={{color: 'white', fontSize: 20}}>></Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Billing')}>
              <Text style={{color: 'white', fontSize: 20}}>Billing Information</Text>
              <Text style={{color: 'white', fontSize: 20}}>></Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('ViewPlan')}>
              <Text style={{color: 'white', fontSize: 20}}>Your Storage Plan</Text>
              <Text style={{color: 'white', fontSize: 20}}>></Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('FAQ')}>
              <Text style={{color: 'white', fontSize: 20}}>FAQ</Text>
              <Text style={{color: 'white', fontSize: 20}}>></Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity style={styles.button}>
              <Text style={{color: 'white', fontSize: 20}}>Terms and Conditions</Text>
              <Text style={{color: 'white', fontSize: 20}}>></Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1, justifyContent: 'flex-end', padding: 25}}>
          <LongButton
            title="SIGN OUT"
            onPress={()=>{this.context.logout();}}
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
  },
  bins: {
    color: '#AAB5E0',
    fontSize: 50,
  },
  button: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 15,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  line: {
    borderBottomColor: '#4826A0',
    borderBottomWidth: 1,
    marginLeft: 30
  }
});
