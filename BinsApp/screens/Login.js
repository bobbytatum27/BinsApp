import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import {LoginContext} from '../components/Providers/LoginProvider.js'

// for testing, can remove(?) after
import {Auth} from 'aws-amplify';

export default class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emptyEmail: true,
      emptyPassword: true,
      validInput: false,
    };
  }

  checkAllFields = () => {
    if (this.state.emptyEmail || this.state.emptyPassword) {
      this.setState({validInput: false});
    } else {
      this.setState({validInput: true})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text allowFontScaling={false} style ={styles.descriptionText}>Email </Text>
        <FormInputHandler
          defaultText='Enter your email here'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(val)=>this.setState({email:val, validInput: false})}
          keyboardType='email-address'
          onEndEditing={(val) => {
            if (this.state.email.length > 0) {
              this.setState({emptyEmail: false})
            } else {
              this.setState({emptyEmail: true})
            }
            this.checkAllFields();
          }}
          onBlur={() => this.checkAllFields()}
          returnKeyType='next'
        />
        <Text allowFontScaling={false} style ={styles.descriptionText}>Password</Text>
        <FormInputHandler
          defaultText='Enter a password here'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(val)=>this.setState({password: val, validInput: false})}
          secureTextEntry
          onEndEditing={(val) => {
            if (this.state.password.length > 0) {
              this.setState({emptyPassword: false})
            } else {
              this.setState({emptyPassword: true})
            }
            this.checkAllFields();
          }}
          onBlur={() => this.checkAllFields()}
          returnKeyType='done'
        />
        {this.state.validInput ? (
          <>
        <LongButton
          title="LOGIN"
          onPress={()=>{
            this.context.login(this.state.email, this.state.password)
            .then((msg)=>console.log('successful sign in'))
            .catch(err => Alert.alert(err.message));
          }}
        />
        </>
      ) : (
        <>
        <View style={styles.finishUserEntry}>
          <Text allowFontScaling={false} style={styles.finishUserEntryPrompt}>LOGIN</Text>
        </View>
        </>
      )}
        <Text allowFontScaling={false} style={{textAlign: 'center', color: 'gray', fontSize: 15, marginTop: 10}}
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
    borderRadius: 5,
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
    opacity: 0.3,
    borderRadius: 5
  },
  finishUserEntryPrompt: {
    textAlign: 'center',
    color: 'white',
    opacity: 1.0, // this won't overide the wrapper view's opacity :(
  },
});

/*
Admin Login Button

<Text allowFontScaling={false} style={{textAlign: 'center', color: 'gray', fontSize: 15, marginTop: 10}}
      onPress={() => this.props.navigation.navigate('AdminLogin')}>Admin Login</Text>
*/
