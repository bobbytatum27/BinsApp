import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'

export default class BillingInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{paddingLeft: 25, paddingRight: 25}}>
        <Text style={{paddingBottom: 25, paddingTop: 5, fontSize: 30}}>Billing Info</Text>
        <Text style={styles.questionText}>Name on Card</Text>
        <FormInputHandler />
        <Text style={styles.questionText}>Credit Card</Text>
        <FormInputHandler />
        <Text style={styles.questionText}>Expiration Date</Text>
        <FormInputHandler />
        <Text style={styles.questionText}>Security Code</Text>
        <FormInputHandler />
        <View style={{paddingTop: 15}}>
          <Button
            title="Confirm Pickup"
            onPress={()=>Alert.alert('Pickup Confirmed!')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  questionText: {
    fontSize: 20,
    paddingTop: 15
  }
});
