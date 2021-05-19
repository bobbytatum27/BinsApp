import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, TouchableOpacity, Image } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import { LoginContext } from '../components/Providers/LoginProvider.js';
import {Auth} from 'aws-amplify';
import { Ionicons } from '@expo/vector-icons';
import {Url} from '../src/components/url.js';

export default class EditPlan extends React.Component {
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
      options: []
    }
  }

  selectionOnPress(type) {
  this.setState({selectedButton: type})
  }

  onSubmit() {
    this.updateUser()
    fetch(Url+'/modifycustomers',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(this.state)
  })}

  async updateUser() {
    let user = await Auth.currentAuthenticatedUser();

    let result = await Auth.updateUserAttributes(user, {
      'custom:size': this.state.selectedButton
    });
      }

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
        <View style={{flex: 2}}>
          <Text allowFontScaling={false} style={styles.descriptionText}>Available Plans</Text>
            <ScrollView style={{marginTop:15}}>
            <TouchableOpacity style={this.state.selectedButton === 'By Item' ? styles.selectedButton : styles.openButton} onPress={() => this.selectionOnPress("By Item")}>
              <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text allowFontScaling={false} style={styles.buttonHeader}>By Item</Text>
                <Text allowFontScaling={false} style={styles.buttonHeader}>$7/month</Text>
              </View>
              <Text allowFontScaling={false} style={{color: '#FFF'}}>60x40x31.5cm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={this.state.selectedButton === '2x2' ? styles.selectedButton : styles.openButton} onPress={() => this.selectionOnPress("2x2")}>
              <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text allowFontScaling={false} style={styles.buttonHeader}>2'x2'</Text>
                <Text allowFontScaling={false} style={styles.buttonHeader}>$79/month</Text>
              </View>
              <Text allowFontScaling={false} style={{color: '#FFF'}}>16 cubic ft - Hall Closet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={this.state.selectedButton === '2x4' ? styles.selectedButton : styles.openButton} onPress={() => this.selectionOnPress("2x4")}>
              <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text allowFontScaling={false} style={styles.buttonHeader}>2'x4'</Text>
                <Text allowFontScaling={false} style={styles.buttonHeader}>$99/month</Text>
              </View>
              <Text allowFontScaling={false} style={{color: '#FFF'}}>32 cubic feet - Bedroom Closet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={this.state.selectedButton === '5x5' ? styles.selectedButton : styles.openButton} onPress={() => this.selectionOnPress("5x5")}>
              <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text allowFontScaling={false} style={styles.buttonHeader}>5'x5'</Text>
                <Text allowFontScaling={false} style={styles.buttonHeader}>$134/month</Text>
              </View>
              <Text allowFontScaling={false} style={{color: '#FFF'}}>100 cubic feet - Walk-in Closet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={this.state.selectedButton === '5x10' ? styles.selectedButton : styles.openButton} onPress={() => this.selectionOnPress("5x10")}>
              <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text allowFontScaling={false} style={styles.buttonHeader}>5'x10'</Text>
                <Text allowFontScaling={false} style={styles.buttonHeader}>$157/month</Text>
              </View>
              <Text allowFontScaling={false} style={{color: '#FFF'}}>200 cubic feet - Studio Apt.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={this.state.selectedButton === '5x15' ? styles.selectedButton : styles.openButton} onPress={() => this.selectionOnPress("5x15")}>
              <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text allowFontScaling={false} style={styles.buttonHeader}>5'x15'</Text>
                <Text allowFontScaling={false} style={styles.buttonHeader}>$191/month</Text>
              </View>
              <Text allowFontScaling={false} style={{color: '#FFF'}}>300 cubic feet - Small 1BR Apt.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={this.state.selectedButton === '10x10' ? styles.selectedButton : styles.openButton} onPress={() => this.selectionOnPress("10x10")}>
              <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text allowFontScaling={false} style={styles.buttonHeader}>10'x10'</Text>
                <Text allowFontScaling={false} style={styles.buttonHeader}>$236/month</Text>
              </View>
              <Text allowFontScaling={false} style={{color: '#FFF'}}>400 cubic feet - 1BR Apt.</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={{flex:1, justifyContent: 'flex-end'}}>
        <TouchableOpacity style = {styles.cancelButton} onPress = {() => {Alert.alert("Are you sure you want to cancel?")}}>
          <Text allowFontScaling={false} style={{color: 'white', fontSize: 16, textAlign: 'center'}}>Cancel Plan</Text>
        </TouchableOpacity>
        <Text allowFontScaling={false} style = {{marginLeft: 15, marginTop: 10, marginRight: 15, color: 'gray'}}>If you cancel now, you can still store items until ___________________</Text>
          <LongButton
            title="SAVE INFO"
            onPress={()=>{this.onSubmit(); Alert.alert("Your Information Has Been Saved")}}
          />
        </View>
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
  openButton: {
    backgroundColor: "#7B1FA2",
    borderRadius: 5,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    padding: 5,
    borderColor: '#FFF'
  },
  selectedButton: {
    backgroundColor: "green",
    borderRadius: 5,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    padding: 5,
    borderColor: '#FFF'
  },
  cancelButton: {
    backgroundColor: "tomato",
    borderRadius: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 25,
    padding: 10,
    borderColor: '#FFF'
  },
  buttonHeader: {
    color: '#FFF',
    fontSize: 18,
  },
});
