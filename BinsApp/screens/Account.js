import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import { LoginContext } from '../components/LoginProvider.js';
import {Auth} from 'aws-amplify';

export default class Account extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      name: Auth.user.attributes.name,
      email: Auth.user.attributes.email,
      phone: Auth.user.attributes.phone_number,
      addressLine1: '123 New York Avenue',
      addressLine2: '',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90021',
      specialInstructions: 'Gate Code',
      nameOnCard: '',
      creditCardNum: '',
      expirationDate: '',
      securityCode: '',
    }
  }

  onSubmit() {
    fetch('http://192.168.1.247:5000/modifycustomers',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(this.state)
  })}

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text style={styles.sectionHeader}>Your Account</Text>
        <Text style ={styles.descriptionText}>Full Name</Text>
        <FormInputHandler
          defaultValue={this.state.name}
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(val)=>this.setState({name:val})}
        />
        <Text style ={styles.descriptionText}>Email </Text>
        <FormInputHandler
          defaultValue={this.state.email}
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(val)=>this.setState({email:val})}
        />
        <Text style ={styles.descriptionText}>Password</Text>
        <FormInputHandler
          defaultValue='Password'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
        />
        <Text style ={styles.descriptionText}>Phone</Text>
        <FormInputHandler
          defaultValue={this.state.phone}
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(val)=>this.setState({phone:val})}
        />
        <Text style ={styles.descriptionText}>Address Line 1</Text>
        <FormInputHandler
          defaultValue={this.state.addressLine1}
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(text) => this.setState({addressLine1: text})}
        />
        <Text style ={styles.descriptionText}>Address Line 2</Text>
        <FormInputHandler
          defaultValue={this.state.addressLine2}
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(text) => this.setState({addressLine2: text})}
        />
        <Text style ={styles.descriptionText}>City</Text>
        <FormInputHandler
          defaultValue={this.state.city}
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(text) => this.setState({city: text})}
        />
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
          <View style={{flex:1}}>
            <Text style ={styles.descriptionText}>State</Text>
            <FormInputHandler
              defaultValue={this.state.state}
              defaultTextColor='#8B8B8B'
              style={styles.userInfoText}
              onChangeText={(text) => this.setState({state: text})}
            />
          </View>
          <View style={{flex:1}}>
            <Text style ={styles.descriptionText}>Zip</Text>
            <FormInputHandler
              defaultValue={this.state.zip}
              style={styles.userInfoText}
              defaultTextColor='#8B8B8B'
              onChangeText={(text) => this.setState({zip: text})}
            />
          </View>
        </View>
        <Text style={styles.descriptionText}>Name on Card</Text>
        <FormInputHandler
          defaultText='Name on Card'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(text) => this.setState({nameOnCard: text})}
        />
        <Text style={styles.descriptionText}>Credit Card</Text>
        <FormInputHandler
          defaultText='xxxx xxxx xxxx xxxx'
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
        <View>
        <LongButton
          title="SAVE INFO"
          onPress={()=>{this.onSubmit(); this.props.navigation.navigate('Home')}}
        />
        </View>
        <View style = {{marginTop: -15}}>
        <LongButton
          title="SIGN OUT"
          onPress={()=>{
            this.context.logout()
            .then(() => this.props.navigation.dangerouslyGetParent().navigate('Landing'));
          }}
        />
        </View>
        </ScrollView>
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
  },
  sectionHeader: {
    color: '#AAB5E0',
    fontSize: 25,
    marginBottom: 25,
    marginLeft: 15
  },
});
