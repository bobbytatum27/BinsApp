import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Enter name here'};
  }

  render() {
    return (
      <View style={{padding: 25}}>
        <Text>Enter your full name</Text>
        <FormInputHandler />
        <Text>Enter your email:</Text>
        <FormInputHandler />
        <Text>Enter your password</Text>
        <FormInputHandler />
        <Button
          title="Next"
          onPress={()=>Alert.alert('Stack navigator to handle going to next page')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
