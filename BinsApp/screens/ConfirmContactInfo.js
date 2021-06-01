import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import {LoginContext} from '../components/Providers/LoginProvider.js'

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

  confirmEmail = () => {
    let userData = {
      id: this.props.route.params.email,
      facilityID: this.props.route.params.facilityID,
      name: this.props.route.params.name,
      email: this.props.route.params.email,
      password: this.props.route.params.password,
      phone: this.props.route.params.phone,
      addressLine1: this.props.route.params.addressLine1,
      addressLine2: this.props.route.params.addressLine2,
      city: this.props.route.params.city,
      state: this.props.route.params.state,
      zip: this.props.route.params.zip,
      specialInstructions: this.props.route.params.specialInstructions,
      size: this.props.route.params.size,
      parking: this.props.route.params.parking,
      building: this.props.route.params.building,
      licenseNumber: this.props.route.params.licenseNumber,
      licenseState: this.props.route.params.licenseState,
    };
    this.props.navigation.navigate('InitialAppointmentScreen', userData);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text allowFontScaling={false} style ={styles.descriptionText}>Check your email or phone for a confirmation code to verify your account. </Text>
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
            .then(() => {this.confirmEmail();})
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
