import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import {LoginContext} from '../components/LoginProvider.js'

// for testing, can remove(?) after
import {Auth} from 'aws-amplify';

export default class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style ={styles.descriptionText}>Email </Text>
        <FormInputHandler
          defaultText='Enter your email here'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(val)=>this.setState({email:val})}
        />
        <Text style ={styles.descriptionText}>Password</Text>
        <FormInputHandler
          defaultText='Enter a password here'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
        />
        <LongButton
          title="LOGIN"
          onPress={()=>{
            this.context.login()
            // only uncomment to move between screens during testing. .login() needs to be a promise before reimplementing
            // this.props.navigation.navigate('Home')
            // the button below this needs to be removed as well.
          }}
        />
        
        <Button
          title='sign up. use to add users for testing.'
          onPress={()=>{
            Auth.signUp({
              username: 'bobbyt9927@yahoo.com',
              password: 'XYZ253jksdgUUGw235',
              attributes: {
                name: this.state.name,
                phone_number: '',
                address: this.state.addressLine1+ " " + this.state.addressLine2 + " " + this.state.city + ", " + this.state.state + " " + this.state.zip,
               },
            })
            .then(() => console.log('successful sign up!'))
                .catch(err => console.log('error signing up!: ', err));
          }}
        />

        <Text style={{textAlign: 'center',
                      color: 'gray',
                      fontSize: 15,
                      marginTop: 10}}>Forgot Password?</Text>
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
  }
});
