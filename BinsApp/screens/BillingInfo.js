import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'

export default class BillingInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameOnCard: '',
      creditCardNum: '',
      expirationDate: '',
      securityCode: '',
    }
  }

  render() {
    return (
      <View style={{paddingLeft: 25, paddingRight: 25}}>
        <Text style={{paddingBottom: 25, paddingTop: 5, fontSize: 30}}>Billing Info</Text>
        <Text style={styles.questionText}>Name on Card</Text>
        <FormInputHandler 
          onChangeText={(text) => this.setState({nameOnCard: text})}
        />
        <Text style={styles.questionText}>Credit Card</Text>
        <FormInputHandler 
          onChangeText={(text) => this.setState({creditCardNum: text})}
        />
        <Text style={styles.questionText}>Expiration Date</Text>
        <FormInputHandler 
          onChangeText={(text) => this.setState({expirationDate: text})}
        />
        <Text style={styles.questionText}>Security Code</Text>
        <FormInputHandler 
          onChangeText={(text) => this.setState({securityCode: text})}
        />
        <View style={{paddingTop: 15}}>
          <Button
            title="Confirm Pickup"
            onPress={()=>this.props.navigation.navigate('HomeScreen')}
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
