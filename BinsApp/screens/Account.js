import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'

export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 14,
      name: 'Sarah Parmenter',
      email: 'sarah@youknowwho.com',
      phone: '(888) 888-8888',
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
          defaultText={this.state.name}
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(val)=>this.setState({name:val})}
        />
        <Text style ={styles.descriptionText}>Email </Text>
        <FormInputHandler
          defaultText={this.state.email}
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(val)=>this.setState({email:val})}
        />
        <Text style ={styles.descriptionText}>Password</Text>
        <FormInputHandler
          defaultText='Password'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
        />
        <Text style ={styles.descriptionText}>Phone</Text>
        <FormInputHandler
          defaultText={this.state.phone}
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(val)=>this.setState({phone:val})}
        />
        <Text style ={styles.descriptionText}>Address Line 1</Text>
        <FormInputHandler
          defaultText={this.state.addressLine1}
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(text) => this.setState({addressLine1: text})}
        />
        <Text style ={styles.descriptionText}>Address Line 2</Text>
        <FormInputHandler
          defaultText={this.state.addressLine2}
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(text) => this.setState({addressLine2: text})}
        />
        <Text style ={styles.descriptionText}>City</Text>
        <FormInputHandler
          defaultText={this.state.city}
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(text) => this.setState({city: text})}
        />
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
          <View style={{flex:1}}>
            <Text style ={styles.descriptionText}>State</Text>
            <FormInputHandler
              defaultText={this.state.state}
              defaultTextColor='#8B8B8B'
              style={styles.userInfoText}
              onChangeText={(text) => this.setState({state: text})}
            />
          </View>
          <View style={{flex:1}}>
            <Text style ={styles.descriptionText}>Zip</Text>
            <FormInputHandler
              defaultText={this.state.zip}
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
          onPress={()=>this.props.navigation.navigate('Landing')}
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
