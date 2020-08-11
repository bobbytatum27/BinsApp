import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import {LoginContext} from '../components/LoginProvider.js'

// for testing, can remove(?) after
import {Auth} from 'aws-amplify';

export default class PasswordReset extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      code: '',
      confirmationCodeSent: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Print State' onPress={() => console.log(this.state)} />
        {this.state.confirmationCodeSent ? (
          <>
          <Text style ={styles.descriptionText}>Confirmation Code</Text>
          <FormInputHandler
            defaultText='Enter the code sent to your email here.'
            defaultTextColor='#8B8B8B'
            style={styles.userInfoText}
            onChangeText={(val)=>this.setState({code: val})}
            keyboardType='email-address'
          />
          <Text style ={styles.descriptionText}>New Password</Text>
          <FormInputHandler
            defaultText='Enter your new password here.'
            defaultTextColor='#8B8B8B'
            style={styles.userInfoText}
            onChangeText={(val)=>this.setState({password: val})}
            keyboardType='email-address'
          />
          <LongButton
            title="Confirm New Password"
            onPress={()=>{
              console.log('Confirming...');
              this.context.confirmResetPassword(this.state.email, this.state.code, this.state.password)
              .then(() => console.log('success'))
              .catch((err) => console.log('error on confirmation step: ', err))
            }}
          />
          </>
        ) : (
          <>
          <Text style ={styles.descriptionText}>Password Recovery</Text>
          <FormInputHandler
            defaultText='Enter the email attached to your account here.'
            defaultTextColor='#8B8B8B'
            style={styles.userInfoText}
            onChangeText={(val)=>this.setState({email: val})}
            keyboardType='email-address'
          />
          <LongButton
            title="Reset Password"
            onPress={()=>{
              this.context.resetPassword(this.state.email)
              .then(() => {
                console.log('code sent');
                this.setState({confirmationCodeSent: true})
              })
              .catch((err) => console.log('error: ', err));
            }}
          />
          </>
        )} 
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