import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import { LoginContext } from '../components/LoginProvider.js';
import {Auth} from 'aws-amplify';

export default class EditAddress extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      addressLine1: '123 New York Avenue',
      addressLine2: '',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90021',
      specialInstructions: 'Gate Code',
    }
  }

  onSubmit() {
    fetch('http://192.168.1.247:5000/modifycustomers',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(this.state)
  })}

  componentDidMount(){
    Auth.currentUserInfo().then((userInfo) => {
      const { attributes = {} } = userInfo;
      this.setState({name:attributes['name']});
      this.setState({email:attributes['email']});
      this.setState({phone:attributes['phone_number']});
      this.setState({address:attributes['address']});
      console.log(attributes);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 5}}>
          <Text style={styles.sectionHeader}>Edit Address</Text>
          <Text style ={styles.descriptionText}>Address Line 1</Text>
          <FormInputHandler
            defaultValue={this.state.addressLine1}
            defaultTextColor='#8B8B8B'
            style={styles.userInfoText}
            onChangeText={(text) => this.setState({addressLine1: text})}
          />
          <Text style ={styles.descriptionText}>Address Line 2</Text>
          <FormInputHandler
            defaultValue={this.state.addressLine2}
            defaultTextColor='#8B8B8B'
            style={styles.userInfoText}
            onChangeText={(text) => this.setState({addressLine2: text})}
          />
          <Text style ={styles.descriptionText}>City</Text>
          <FormInputHandler
            defaultValue={this.state.city}
            defaultTextColor='#8B8B8B'
            style={styles.userInfoText}
            onChangeText={(text) => this.setState({city: text})}
          />
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <View style={{flex:1}}>
              <Text style ={styles.descriptionText}>State</Text>
              <FormInputHandler
                defaultValue={this.state.state}
                defaultTextColor='#8B8B8B'
                style={styles.userInfoText}
                onChangeText={(text) => this.setState({state: text})}
              />
            </View>
            <View style={{flex:1}}>
              <Text style ={styles.descriptionText}>Zip</Text>
              <FormInputHandler
                defaultValue={this.state.zip}
                style={styles.userInfoText}
                defaultTextColor='#8B8B8B'
                onChangeText={(text) => this.setState({zip: text})}
              />
            </View>
          </View>
        </View>
        <View style={{flex:1, justifyContent: 'space-around'}}>
          <LongButton
            title="SAVE INFO"
            onPress={()=>{this.onSubmit(); this.props.navigation.navigate('Home')}}
          />
          <LongButton
            title="SIGN OUT"
            onPress={()=>{
              this.context.logout()
              .then(() => this.props.navigation.dangerouslyGetParent().navigate('Landing'));
            }}
          />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
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
});
