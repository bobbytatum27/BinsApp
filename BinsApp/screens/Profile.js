import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import { LoginContext } from '../components/LoginProvider.js';
import {Auth} from 'aws-amplify';

export default class Profile extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
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
        <View style={{flex:5}}>
          <Text style={styles.sectionHeader}>Personal Information</Text>
          <Text style ={styles.descriptionText}>Email </Text>
          <FormInputHandler
            defaultText={this.state.email}
            defaultTextColor='#8B8B8B'
            style={styles.userInfoText}
            onChangeText={(val)=>this.setState({email:val})}
            editable={false}
          />
          <Text style ={styles.descriptionText}>Full Name</Text>
          <FormInputHandler
            defaultValue={this.state.name}
            defaultTextColor='#8B8B8B'
            style={styles.userInfoText}
            onChangeText={(val)=>this.setState({name:val})}
          />
          <Text style ={styles.descriptionText}>Password</Text>
          <FormInputHandler
            defaultValue='Password'
            defaultTextColor='#8B8B8B'
            style={styles.userInfoText}
          />
          <Text style ={styles.descriptionText}>Phone</Text>
          <FormInputHandler
            defaultValue={this.state.phone}
            defaultTextColor='#8B8B8B'
            style={styles.userInfoText}
            onChangeText={(val)=>this.setState({phone:val})}
          />
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
