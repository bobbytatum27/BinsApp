import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      phone: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style ={styles.descriptionText}>Full Name</Text>
        <FormInputHandler
          defaultText='Enter your full name here'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(val)=>this.setState({name:val})}
        />
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
          onChangeText={(val)=>this.setState({password:val})}
          secureTextEntry
        />
        <Text style ={styles.descriptionText}>Phone</Text>
        <FormInputHandler
          defaultText='Enter your phone number here'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(val)=>this.setState({phone:val})}
        />
        <LongButton
          title="NEXT"
          onPress={()=>this.props.navigation.navigate('InitialAppointmentScreen', {name:this.state.name, email:this.state.email, password:this.state.password, phone:this.state.phone})}
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
