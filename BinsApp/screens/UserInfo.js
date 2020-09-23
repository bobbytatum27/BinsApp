import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, KeyboardAvoidingView } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import { LoginContext } from '../components/LoginProvider.js';
import {Url} from '../src/components/url.js';

export default class UserInfo extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordReentry: '',
      phone: '',
      address: '',
      specialInstructions: '',
      size: '',
      validInput: false,
      validEmail: false,
      validPassword: false,
      validPhone: false,
      nonemptyName: false,
      // these are for rendering a red box on invalid input
      validNameUI: true,
      validPhoneUI: true,
      validEmailUI: true,
      validPasswordUI: true,
      validPasswordReentry: true,
    };
  }

  checkAllFields = () => {
    if (this.state.validEmail && this.state.validPassword && this.state.validPhone && this.state.nonemptyName && this.state.validPasswordReentry) {
      this.setState({validInput: true});
    } else {
      this.setState({validInput: false})
    }
  }

  checkPasswordReentry = () => {
    if (this.state.password != this.state.passwordReentry) {
      this.setState({validPasswordReentry: false})
    }
  }

  componentDidMount() {
    const wholeAddress = this.props.route.params.addressLine1 + ' ' + this.props.route.params.addressLine2 + ' ' +
                         this.props.route.params.city + ', ' + this.props.route.params.state + ' ' + this.props.route.params.zip;
    const specialInstructions = this.props.route.params.specialInstructions;
    const size = this.props.route.params.size;
    this.setState({address: wholeAddress});
    this.setState({specialInstructions: specialInstructions});
    this.setState({size: size});
  }

  onSubmit() {
    fetch(Url+'/customers',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(this.state)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style ={{...styles.descriptionText, color: this.state.validNameUI ? 'white' : 'red'}}>Full Name {this.state.validNameUI ? '' : ' - Don\'t leave this empty!'}</Text>
        <FormInputHandler
          defaultText='Enter your full name here'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          autoCapitalize='words'
          onChangeText={(val)=>this.setState({name: val, validInput: false})}
          onEndEditing={(val) => {
            if (this.state.name.length == 0) {
              this.setState({validNameUI: false, nonemptyName: false})
            } else {
              this.setState({nonemptyName: true, validNameUI: true})
            }
            this.checkAllFields();
          }}
          onBlur={() => this.checkAllFields()}
          returnKeyType='next'
        />
        <Text style ={{...styles.descriptionText, color: this.state.validPhoneUI ? 'white' : 'red'}}>Phone {this.state.validPhoneUI ? '' : ' - Must be 10 digits!'}</Text>
        <FormInputHandler
          defaultText='Enter your phone number here'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(val)=>this.setState({phone: val, validInput: false})}
          keyboardType='number-pad'
          onEndEditing={(val) => {
            if (this.state.phone.length == 10) {
              this.setState({validPhone: true, validPhoneUI: true})
            } else {
              this.setState({validPhone: false, validPhoneUI: false})
            }
            this.checkAllFields();
          }}
          onBlur={() => this.checkAllFields()}
          returnKeyType='next'
        />
        <Text style ={{...styles.descriptionText, color: this.state.validEmailUI ? 'white' : 'red'}}>Email {this.state.validEmailUI ? '' : '- Invalid Email!'}</Text>
        <FormInputHandler
          defaultText='Enter your email here'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(val)=>this.setState({email: val, validInput: false})}
          keyboardType='email-address'
          onEndEditing={(prev) => {
            // i got this regex online so we should test it (but it had the most upvotes on stack overflow lol)
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (emailRegex.test(this.state.email.toLowerCase())) {
              this.setState({validEmail: true, validEmailUI: true})
            } else {
              this.setState({validEmail: false, validEmailUI: false})
            }
            this.checkAllFields();
          }}
          onBlur={() => this.checkAllFields()}
          returnKeyType='next'
        />
        <Text style ={{...styles.descriptionText, color: this.state.validPasswordUI ? 'white' : 'red'}}>Password {this.state.validPasswordUI ? '' : ' - Must be 8 characters and contain a number!'}</Text>
        <FormInputHandler
          defaultText='Enter a password here'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(val)=>this.setState({password: val, validInput: false})}
          secureTextEntry
          onEndEditing={(val) => {
            // regex to check if password has number
            const hasNumberRegex = /\d/;
            if (this.state.password.length >= 8 && hasNumberRegex.test(this.state.password)) {
              this.setState({validPassword: true, validPasswordUI: true})
            } else {
              this.setState({validPassword: false, validPasswordUI: false})
            }
            this.checkPasswordReentry();
            this.checkAllFields();
          }}
          onBlur={() => {
            this.checkPasswordReentry();
            this.checkAllFields();
          }}
          returnKeyType='next'
        />
        <Text style ={{...styles.descriptionText, color: this.state.validPasswordReentry ? 'white' : 'red'}}>Confirm Password {this.state.validPasswordReentry ? '' : ' - Passwords do not match!'}</Text>
        <FormInputHandler
          defaultText='Confirm your password here'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(val)=>this.setState({passwordReentry: val, validInput: false})}
          secureTextEntry
          onEndEditing={(val) => {
            if (this.state.passwordReentry != this.state.password) {
              this.setState({validPasswordReentry: false})
            } else {
              this.setState({validPasswordReentry: true})
            }
            this.checkPasswordReentry();
            this.checkAllFields();
          }}
          onBlur={() => {
            this.checkPasswordReentry();
            this.checkAllFields()
          }}
          returnKeyType='next'
        />
        {this.state.validInput ? (
          <>
            <LongButton
              title="NEXT"
              onPress={()=>{
                this.context.signup(this.state.email, this.state.password, this.state.name, '+1' + this.state.phone, this.state.address, this.props.route.params.specialInstructions, this.state.size)
                .then(() => {this.onSubmit(); this.props.navigation.navigate('ConfirmContactInfo', {email: this.state.email, password: this.state.password})})
                .catch((err) => {
                  console.log('error signing up - see below', JSON.stringify(err));
                  if (err.code == 'UsernameExistsException') {
                    Alert.alert('The email you\'ve entered is already in use. Please choose another.');
                  }
                })
              }}
            />
          </>
        ) : (
          <>
            <View style={styles.finishUserEntry}>
              <Text style={styles.finishUserEntryPrompt}>Fill out your information before you move on.</Text>
            </View>
            <View>
              <Text style={{...styles.validInputInstructions, color: this.state.validPhone ? '#3DED97' : 'red'}}>
                Your phone number must be 10 digits. Please do not include the country code.
              </Text>
              <Text style={{...styles.validInputInstructions, color: this.state.validPassword ? '#3DED97' : 'red'}}>
                Your password must be at least 8 characters and include a number.
              </Text>
            </View>
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
  },
  finishUserEntry: {
    padding: 10,
    margin: 15,
    backgroundColor: '#7B1FA2',
    opacity: 0.3
  },
  finishUserEntryPrompt: {
    textAlign: 'center',
    color: 'white',
    opacity: 1.0, // this won't overide the wrapper view's opacity :(
  },
  validInputInstructions: {
    fontSize: 15,
    marginTop: 13,
    paddingLeft: 15,
    marginTop: 30
  }
});
