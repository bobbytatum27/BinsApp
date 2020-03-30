import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'

export default class AppointmentScheduler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 25, paddingBottom: 25}}>Schedule an Appointment!</Text>
        <View style={{padding: 25}}>
          <Text>Address Line 1</Text>
          <FormInputHandler />
          <Text>Address Line 2</Text>
          <FormInputHandler />
          <Text>City</Text>
          <FormInputHandler />
          <Text>State</Text>
          <FormInputHandler />
          <Text>Zip</Text>
          <FormInputHandler />
        </View>
        <View style={{padding: 25}}>
          <Text>Special Instructions: </Text>
          <FormInputHandler />
        </View>
        <Text>Please select a date</Text>
        <Text style={{backgroundColor: 'blue', color: 'white'}}>Calendar goes here:</Text>
        <Text style={{paddingTop: 25}}>Please select a time</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center', borderColor: '#d6d7da'}}>
          <Button
            title="8-10"
            onPress={()=>Alert.alert('time noted!')}
            />
          <Button
            title="10-12"
            onPress={()=>Alert.alert('time noted!')}
          />
          <Button
            title="12-2"
            onPress={()=>Alert.alert('time noted!')}
          />
          <Button
            title="2-4"
            onPress={()=>Alert.alert('time noted!')}
          />
          <Button
            title="4-6"
            onPress={()=>Alert.alert('time noted!')}
          />
          <Button
            title="5-7"
            onPress={()=>Alert.alert('time noted!')}
          />
          <Button
            title="7-9"
            onPress={()=>Alert.alert('time noted!')}
          />
        </View>
        <Button
          title="Next"
          onPress={()=>this.props.navigation.navigate('BillingInfoScreen')}
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
