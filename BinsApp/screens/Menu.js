import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, TouchableOpacity } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import { LoginContext } from '../components/Providers/LoginProvider.js';
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

  render() {
    return (
      <View style={styles.container}>
          <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex:1}}>
            <Text allowFontScaling={false} style={styles.bins}>Bins</Text>
          </View>
          <View style={{flex:1}}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('ViewProfile')}>
              <Text allowFontScaling={false} style={{color: 'white', fontSize: 20}}>Account Information</Text>
              <Text allowFontScaling={false} style={{color: 'white', fontSize: 20}}>{'>'}</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Billing')}>
              <Text allowFontScaling={false} style={{color: 'white', fontSize: 20}}>Billing Information</Text>
              <Text allowFontScaling={false} style={{color: 'white', fontSize: 20}}>{'>'}</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('ViewPlan')}>
              <Text allowFontScaling={false} style={{color: 'white', fontSize: 20}}>Your Storage Plan</Text>
              <Text allowFontScaling={false} style={{color: 'white', fontSize: 20}}>{'>'}</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('FAQ')}>
              <Text allowFontScaling={false} style={{color: 'white', fontSize: 20}}>FAQ</Text>
              <Text allowFontScaling={false} style={{color: 'white', fontSize: 20}}>{'>'}</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <TouchableOpacity style={styles.button}>
              <Text allowFontScaling={false} style={{color: 'white', fontSize: 20}}>Terms and Conditions</Text>
              <Text allowFontScaling={false} style={{color: 'white', fontSize: 20}}>{'>'}</Text>
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
