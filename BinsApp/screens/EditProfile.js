import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import { LoginContext } from '../components/LoginProvider.js';
import {Auth} from 'aws-amplify';
import { Ionicons } from '@expo/vector-icons';
import {Url} from '../src/components/url.js';

export default class EditProfile extends React.Component {
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
        <View style={{flex:5}}>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.sectionHeader}>Edit Profile</Text>
            <Ionicons name={'ios-log-out'} size={25} color={'white'} style={{textAlign: 'right', marginRight: 10}} onPress={() =>
              {this.context.logout().then(() => this.props.navigation.dangerouslyGetParent().navigate('Landing'));}}/>
          </View>
          <Text style ={styles.descriptionText}>Full Name</Text>
          <FormInputHandler
            defaultValue={this.state.name}
            defaultTextColor='#8B8B8B'
            style={styles.userInfoText}
            onChangeText={(val)=>this.setState({name:val})}
          />
          <Text style ={styles.descriptionText}>Phone</Text>
          <FormInputHandler
            defaultValue={this.state.phone}
            defaultTextColor='#8B8B8B'
            style={styles.userInfoText}
            onChangeText={(val)=>this.setState({phone:val})}
          />
          <Text style ={styles.descriptionText}>Address</Text>
          <FormInputHandler
            defaultValue={this.state.address}
            defaultTextColor='#8B8B8B'
            style={styles.userInfoText}
            onChangeText={(text) => this.setState({addressLine1: text})}
          />
          <Text style ={styles.descriptionText}>Special Instructions</Text>
          <FormInputHandler
            defaultValue={this.state.specialInstructions}
            defaultTextColor='#8B8B8B'
            style={styles.userInfoText}
            onChangeText={(text) => this.setState({specialInstructions: text})}
          />
        </View>
        <View style={{flex:1, justifyContent: 'flex-end'}}>
          <LongButton
            title="SAVE INFO"
            onPress={()=>{this.onSubmit(); Alert.alert("Your Information Has Been Saved")}}
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
