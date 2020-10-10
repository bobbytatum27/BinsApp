import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, TouchableOpacity } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import { LoginContext } from '../components/LoginProvider.js';
import {Auth} from 'aws-amplify';
import { Ionicons } from '@expo/vector-icons';
import {Url} from '../src/components/url.js';

export default class ViewProfile extends React.Component {
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

/*
 * this.willFocusSubscription refreshes the screen when going back in React Navigation.
 * The docs recommend using componentWillUnmount, but it seems to cause an issue when navigating back, so I didn't include it here.
*/

  componentDidMount(){
      this.fetchData();
      this.willFocusSubscription = this.props.navigation.addListener(
      'focus',
      () => {
        this.fetchData();
      }
    );
  }

  fetchData(){
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
        <View style={{flex:1, marginTop: 25}}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('EditName')}>
            <View>
              <Text style={{color: 'grey', fontSize: 15, marginBottom: 5}}>Name</Text>
              <Text style={{color: 'white', fontSize: 20}}>{this.state.name}</Text>
            </View>
            <Text style={{color: 'white', fontSize: 20}}>></Text>
          </TouchableOpacity>
          <View style={styles.line}/>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('EditPhone')}>
            <View>
              <Text style={{color: 'grey', fontSize: 15, marginBottom: 5}}>Phone</Text>
              <Text style={{color: 'white', fontSize: 20}}>{this.state.phone}</Text>
            </View>
            <Text style={{color: 'white', fontSize: 20}}>></Text>
          </TouchableOpacity>
          <View style={styles.line}/>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('EditAddress')}>
            <View>
              <Text style={{color: 'grey', fontSize: 15, marginBottom: 5}}>Address</Text>
              <Text style={{color: 'white', fontSize: 20, marginRight: 15}}>{this.state.address}</Text>
            </View>
            <Text style={{color: 'white', fontSize: 20}}>></Text>
          </TouchableOpacity>
          <View style={styles.line}/>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('EditSpecialInstructions')}>
            <View>
              <Text style={{color: 'grey', fontSize: 15, marginBottom: 5}}>Special Instructions</Text>
              <Text style={{color: 'white', fontSize: 20}}>{this.state.specialInstructions}</Text>
            </View>
            <Text style={{color: 'white', fontSize: 20}}>></Text>
          </TouchableOpacity>
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
    paddingLeft: 15,
    color: 'white',
  },
  sectionHeader: {
    color: '#AAB5E0',
    fontSize: 25,
    marginBottom: 25,
    marginLeft: 15
  },
  button: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 15,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  line: {
    borderBottomColor: '#4826A0',
    borderBottomWidth: 1,
    marginLeft: 30
  }
});
