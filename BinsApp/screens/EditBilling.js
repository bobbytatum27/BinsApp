import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import { LoginContext } from '../components/Providers/LoginProvider.js';
import {Auth} from 'aws-amplify';
import { Ionicons } from '@expo/vector-icons';
import {Url} from '../src/components/url.js';

export default class EditBilling extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      specialInstructions: '',
      nameOnCard: '',
      creditCardNum: '',
      expirationDate: '',
      securityCode: '',
      selectedButton: '',
    }
  }

  onSubmit() {
    fetch(Url+'/modifycustomers',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(this.state)
  })}

  /*async updateUser() {
    let user = await Auth.currentAuthenticatedUser();

    let result = await Auth.updateUserAttributes(user, {
      'custom:size': this.state.selectedButton
    });
  }*/

  componentDidMount(){
    Auth.currentUserInfo().then((userInfo) => {
      const { attributes = {} } = userInfo;
      this.setState({name:attributes['name']});
      this.setState({email:attributes['email']});
      this.setState({phone:attributes['phone_number']});
      this.setState({address:attributes['address']});
      this.setState({specialInstructions:attributes['custom:specialInstructions']});
      this.setState({selectedButton:attributes['custom:size']});
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text allowFontScaling={false} style={styles.sectionHeader}>To update your billing info, please email us at:</Text>
        <Text allowFontScaling={false} style={styles.sectionHeaderWhite}>contact@bins-storage.com</Text>
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
    fontSize: 15,
    marginLeft: 15
  },
  sectionHeaderWhite: {
    color: '#FFF',
    fontSize: 15,
    marginLeft: 15,
  },
});

/*
<View style={{flex: 5}}>
  <Text allowFontScaling={false} style={styles.descriptionText}>Name on Card</Text>
  <FormInputHandler
    defaultText='Name on Card'
    defaultTextColor='#8B8B8B'
    style={styles.userInfoText}
    onChangeText={(text) => this.setState({nameOnCard: text})}
  />
  <Text allowFontScaling={false} style={styles.descriptionText}>Credit Card</Text>
  <FormInputHandler
    defaultText='xxxx xxxx xxxx xxxx'
    defaultTextColor='#8B8B8B'
    style={styles.userInfoText}
    onChangeText={(text) => this.setState({creditCardNum: text})}
  />
  <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
    <View style={{flex:1}}>
      <Text allowFontScaling={false} style={styles.descriptionText}>Expiration Date</Text>
      <FormInputHandler
        defaultText='Expiration Date'
        defaultTextColor='#8B8B8B'
        style={styles.userInfoText}
        onChangeText={(text) => this.setState({expirationDate: text})}
      />
    </View>
    <View style={{flex:1}}>
      <Text allowFontScaling={false} style={styles.descriptionText}>Security Code</Text>
      <FormInputHandler
        defaultText='Security Code'
        defaultTextColor='#8B8B8B'
        style={styles.userInfoText}
        onChangeText={(text) => this.setState({securityCode: text})}
      />
    </View>
  </View>
  <Text allowFontScaling={false} style = {{marginLeft: 15, marginTop: 10, marginRight: 15, color: 'gray'}}>Next Payment: </Text>
</View>
<View style={{flex:1, justifyContent: 'flex-end'}}>
  <LongButton
    title="SAVE INFO"
    onPress={()=>{this.onSubmit(); Alert.alert("Your Information Has Been Saved")}}
  />
</View>
*/
