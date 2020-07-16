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
        <FormInputHandler 
          defaultText='Enter your full name here'
          style={styles.userInfoText}
        />
        <FormInputHandler 
          defaultText='Enter your email here'
          style={styles.userInfoText}
        />
        <FormInputHandler 
          defaultText='Enter a password here'
          style={styles.userInfoText}
        />
        <Button
          title="Next"
          onPress={()=>this.props.navigation.navigate('AppointmentSchedulerScreen')}
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
  },
  userInfoText: {
    backgroundColor: '#F5F5F5',
    textAlign: 'center',
    margin: 15,
    padding: 15,
  }
});
