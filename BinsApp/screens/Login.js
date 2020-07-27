import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'

export default class Login extends React.Component {
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
          onPress={()=>this.props.navigation.navigate('Home')}
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
