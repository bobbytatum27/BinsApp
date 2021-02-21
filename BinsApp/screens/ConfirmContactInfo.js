import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import {LoginContext} from '../components/LoginProvider.js'

// for testing, can remove(?) after
import {Auth} from 'aws-amplify';

export default class ConfirmContactInfo extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);

    this.state = {
      code: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style ={styles.descriptionText}>Check your email or phone for a confirmation code to verify your account. </Text>
        <FormInputHandler
          defaultText='Enter your confirmation code here'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(val)=>this.setState({code: val})}
          keyboardType='numeric'
        />
        <LongButton
          title="Confirm Account"
          onPress={()=>{
            this.context.contactConfirmation(this.props.route.params.email, this.state.code)
            .then(() => this.props.navigation.navigate('InitialAppointmentScreen', {email: this.props.route.params.email, password: this.props.route.params.password}))
            .catch((err) => Alert.alert(err.message))
          }}
        />
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
