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
      passwordReentry: '',
      code: '',
      confirmationCodeSent: false,
      validPassword: false,
      validPasswordUI: true,  // need to separate this out so initial display is not red/invalid
      validPasswordReentry: true,
      validInput: false,
    };
  }

  checkPasswordReentry = () => {
    if (this.state.password != this.state.passwordReentry) {
      this.setState({validPasswordReentry: false});
    } else {
      this.setState({validPasswordReentry: true});
    }
  }

  checkPasswordInput = () => {
    // regex to check if password has number
    const hasNumberRegex = /\d/;  
    if (this.state.password.length >= 8 && hasNumberRegex.test(this.state.password)) {
      this.setState({validPassword: true, validPasswordUI: true})
    } else {
      this.setState({validPassword: false, validPasswordUI: false})
    }
  }

  checkValidInput = () => {
    if (this.state.validPassword && this.state.validPasswordReentry) {
      this.setState({validInput: true});
    } else {
      this.setState({validInput: false});
    }
  }

  render() {
    return (
      <View style={styles.container}>
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
          <Text style ={{...styles.descriptionText, color: this.state.validPasswordUI ? 'white' : 'red'}}>New Password {this.state.validPasswordUI ? '' : ' - Must be 8 characters and contain a number!'}</Text>
          <FormInputHandler
            defaultText='Enter your new password here.'
            defaultTextColor='#8B8B8B'
            style={styles.userInfoText}
            onChangeText={(val)=>this.setState({password: val, validInput: false})}
            keyboardType='email-address'
            onBlur={() => {
              this.checkPasswordInput();
              this.checkPasswordReentry();
              this.checkValidInput();
            }}
            onEndEditing={() => {
              this.checkPasswordInput();
              this.checkPasswordReentry();
              this.checkValidInput();
            }}
            secureTextEntry
          />
          <Text style ={{...styles.descriptionText, color: this.state.validPasswordReentry ? 'white' : 'red'}}>Re-enter new password {this.state.validPasswordReentry ? '' : ' - Passwords do not match!'}</Text>
          <FormInputHandler
            defaultText='Re-enter your new password here.'
            defaultTextColor='#8B8B8B'
            style={styles.userInfoText}
            onChangeText={(val)=>this.setState({passwordReentry: val, validInput: false})}
            keyboardType='email-address'
            onBlur={() => {
              this.checkPasswordReentry();
              this.checkValidInput();
            }}
            onEndEditing={() => {
              this.checkPasswordReentry();
              this.checkValidInput();
            }}
            secureTextEntry
          />
          <LongButton
            title="Confirm New Password"
            onPress={()=>{
              if (!this.state.validInput) {
                Alert.alert('Password Inputs are invalid!')
              } else {
                console.log('Confirming...');
                this.context.confirmResetPassword(this.state.email, this.state.code, this.state.password)
                .then(() => {
                  console.log('successful password reset');
                  this.props.navigation.pop();
                })
                .catch((err) => console.log('error on confirmation step: ', err))
              }
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