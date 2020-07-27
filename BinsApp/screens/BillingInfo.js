import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'

export default class BillingInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      phone: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      specialInstructions: '',
      dateSelected: '',
      timeSelected: '',
      nameOnCard: '',
      creditCardNum: '',
      expirationDate: '',
      securityCode: '',
    }
  }

  onSubmit() {
    fetch('http://192.168.1.247:5000/customers',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(this.state)
  })}

  componentDidMount(){
      const name = this.props.route.params?.name??'';
      const email = this.props.route.params?.email??'';
      const phone = this.props.route.params?.phone??'';
      const addressLine1 = this.props.route.params?.addressLine1??'';
      const addressLine2 = this.props.route.params?.addressLine2??'';
      const city = this.props.route.params?.city??'';
      const state = this.props.route.params?.state??'';
      const zip = this.props.route.params?.zip??'';
      const specialInstructions = this.props.route.params?.specialInstructions??'';
      const dateSelected = this.props.route.params?.dateSelected??'';
      const timeSelected = this.props.route.params?.timeSelected??'';
      this.setState({name});
      this.setState({email});
      this.setState({phone});
      this.setState({addressLine1});
      this.setState({addressLine2});
      this.setState({city});
      this.setState({state});
      this.setState({zip});
      this.setState({specialInstructions});
      this.setState({dateSelected});
      this.setState({timeSelected});
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.descriptionText}>Name on Card</Text>
        <FormInputHandler
          defaultText='Name on Card'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(text) => this.setState({nameOnCard: text})}
        />
        <Text style={styles.descriptionText}>Credit Card</Text>
        <FormInputHandler
          defaultText='Credit Card Number'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(text) => this.setState({creditCardNum: text})}
        />
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
          <View style={{flex:1}}>
            <Text style={styles.descriptionText}>Expiration Date</Text>
            <FormInputHandler
              defaultText='Expiration Date'
              defaultTextColor='#8B8B8B'
              style={styles.userInfoText}
              onChangeText={(text) => this.setState({expirationDate: text})}
            />
          </View>
          <View style={{flex:1}}>
            <Text style={styles.descriptionText}>Security Code</Text>
            <FormInputHandler
              defaultText='Security Code'
              defaultTextColor='#8B8B8B'
              style={styles.userInfoText}
              onChangeText={(text) => this.setState({securityCode: text})}
            />
          </View>
        </View>
        <View style = {{alignItems: 'center'}}>
          <Text style = {styles.header}>Review</Text>
        </View>
        <Textbox header='Date and Time'
                 body={Object.keys(this.state.dateSelected)}
                 body2={this.state.timeSelected}/>
        <Textbox header='Address'
                 body={this.state.addressLine1}
                 body2={this.state.city + ", " + this.state.state + " " + this.state.zip}/>
        <Textbox header='Unit'
                 body=''
                 body2=''/>
        <View style = {{marginTop: 15}}>
          <LongButton
            title="CONFIRM PICKUP"
            onPress={()=>{this.onSubmit(); this.props.navigation.navigate('Home')}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261136',
    padding: 25
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
    marginLeft: 15,
    color: 'white',
  },
  questionText: {
    fontSize: 20,
    paddingTop: 15
  },
  header: {
    color: '#AAB5E0',
    fontSize: 25,
    margin: 15,
    justifyContent: 'center',
  }

});
