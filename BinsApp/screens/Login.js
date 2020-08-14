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
      email: '',
      password: '',
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
          keyboardType='email-address'
        />
        <Text style ={styles.descriptionText}>Password</Text>
        <FormInputHandler
          defaultText='Enter a password here'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(val)=>this.setState({password: val})}
          secureTextEntry
        />
        <LongButton
          title="LOGIN"
          onPress={()=>{
            this.context.login(this.state.email, this.state.password)
            .then((msg)=>console.log('successful sign in'))
            .catch(err => console.log('Error signing in: ', err));
          }}
        />
        <Text style={{textAlign: 'center', color: 'gray', fontSize: 15, marginTop: 10}}
              onPress={() => this.props.navigation.navigate('PasswordReset')}>Forgot Password?</Text>
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
