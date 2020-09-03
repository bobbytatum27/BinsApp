import React from 'react';
import { Modal, SafeAreaView, StyleSheet, Text, TouchableHighlight, View, TextInput, Picker, FlatList, Button, Alert, Image, ScrollView } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import StorageCompanyCard from '../components/StorageCompanyCard'
import LongButton from '../components/LongButton.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import InputValidator from '../components/InputValidator.js'
import {ZipCodes} from '../src/components/zipcodes.js';

export default class SelectFacility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unitSize: '',    // may want error handling in case they try and press without selecting unit size
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      specialInstructions: '',
      storageCardIsVisible: false,
      modalVisible: false,
      storageAddress: '',
    };
  }

  // I think this is no longer in use, it was for the flatlist that got taken out
  UnitSizeSeparator = () => {
    return(
      <View style={{padding: 5}}>
      </View>
    )
  }

  checkAddress() {
    var n = ZipCodes.includes(this.state.zip)
    return n;
  }

  // TODO: make sure the tab formatting is correct, some might be off (maybe)
  render() {
    return (
      <ScrollView style = {styles.container}>
        <Text style={styles.findFacilityText}>Let's find a facility based on your needs:</Text>
        <InputValidator
          titleText='Address Line 1'
          defaultText='Address Line 1'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          autoCapitalize='words'
          returnKeyType='next'
          onChangeText={(text) => this.setState({addressLine1: text})}
          errorMessage='Do not leave this field empty!'
          checkInput={() => {
            if (this.state.addressLine1 == '') {
              return false;
            } else {
              return true;
            }
          }}
        />
        <InputValidator
          titleText='Address Line 2'
          defaultText='Address Line 2'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          autoCapitalize='words'
          returnKeyType='next'
          onChangeText={(text) => this.setState({addressLine2: text})}
          errorMessage='Do not leave this field empty!'
          checkInput={() => true /*this field is optional, so automatically valid*/}
        />
        <InputValidator
          titleText='City'
          defaultText='City'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          autoCapitalize='words'
          returnKeyType='next'
          onChangeText={(text) => this.setState({city: text})}
          errorMessage='Do not leave this field empty!'
          checkInput={() => {
            if (this.state.city == '') {
              return false;
            } else {
              return true;
            }
          }}
        />
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
          <View style={{flex:1}}>
            <InputValidator
              titleText='State'
              defaultText='State'
              defaultTextColor='#8B8B8B'
              style={styles.userInfoText}
              autoCapitalize='characters'
              returnKeyType='next'
              onChangeText={(text) => this.setState({state: text})}
              errorMessage='Please Enter'
              checkInput={() => {
                if (this.state.state == '') {
                  return false;
                } else {
                  return true;
                }
              }}
            />
          </View>
          <View style={{flex:1}}>
            <InputValidator
              titleText='ZIP'
              defaultText='ZIP'
              defaultTextColor='#8B8B8B'
              style={styles.userInfoText}
              keyboardType='number-pad'
              returnKeyType='next'
              onChangeText={(text) => this.setState({zip: text})}
              errorMessage='Invalid ZIP Code!'
              checkInput={() => {
                if (this.state.zip == '' || this.state.zip.length != 5) { // still need to validate only numbers
                  return false;
                } else {
                  return true;
                }
              }}
            />
          </View>
        </View>
        <InputValidator
          titleText='Special Instructions'
          defaultText='Ex: Gate Code, Apartment Number'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          returnKeyType='next'
          onChangeText={(text) => this.setState({specialInstructions: text})}
          errorMessage='Do not leave this field empty!'
          checkInput={() => true /*this field is optional, so automatically valid*/}
        />

        {this.state.storageCardIsVisible ? (
          <>
          <View style={{padding: 15, marginTop: 15}}>
            <Text style={{fontSize: 15, color: 'white', marginBottom: 15, textAlign: 'center'}}>Here's what we found based on your address above.</Text>
            <TouchableOpacity onPress={() => {this.setState({modalVisible:true, storageAddress: '855 Parr Boulevard, Richmond, CA 94801'})
            }}>
              <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 10, borderRadius: 10}}>
                <View style={{flex: 1}}>
                  <Image style={{width: 50, height: 50}} source={require('../photos/csimini.png') }/>
                </View>
                <View style={{flex: 5, backgroundColor: 'white', height: 50, paddingLeft: 10}}>
                  <Text style={{fontSize: 20}}>CSI Mini Storage</Text>
                  <Text>855 Parr Boulevard, Richmond, CA 94801</Text>
                  <Text>$19.99/delivery, free initial move-in</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{height: 5}}>
            </View>
            <TouchableOpacity onPress={() => {this.setState({modalVisible:true, storageAddress: '51 West Hornet Ave., Alameda, CA 94501'})
            }}>
              <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 10, borderRadius: 10}}>
                <View style={{flex: 1}}>
                  <Image style={{width: 50, height: 50}} source={require('../photos/csimini.png') }/>
                </View>
                <View style={{flex: 5, backgroundColor: 'white', height: 50, paddingLeft: 10}}>
                  <Text style={{fontSize: 20}}>CSI Mini Storage</Text>
                  <Text>51 West Hornet Ave., Alameda, CA 94501</Text>
                  <Text>$19.99/delivery, free initial move-in</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          </>
        ) : (
          <>
          <View>
          <LongButton
            title='Find a Unit!'
            onPress={() => {
              if (this.state.addressLine1 == '' || this.state.city == '' || this.state.state == '' || this.state.zip == '') {
                Alert.alert('You\'ve left an important field empty in your address!');
              } else if (this.checkAddress()){
                this.setState({storageCardIsVisible: true});
              } else {
                Alert.alert('Sorry, there are no available facilities near you yet');
              }
            }}
          />
        </View>
          </>
        )}
        <Modal visible={this.state.modalVisible} transparent={true}>
            <View style = {styles.modalView}>
              <View style={{flex:1, alignItems: 'center'}}>
                <Image resizeMode={'contain'} source={require('../photos/csimini.png')} style={{flex:1}}/>
              </View>
              <Ionicons style={styles.close} name="ios-close-circle" size={25} onPress={() => {this.setState({modalVisible:false})}}/>
              <View style={{flex:2, margin: 10}}>
                <Text style={{fontSize: 30, marginLeft: 10}}>CSI Mini Storage</Text>
                <Text style={{marginLeft: 10}}>{this.state.storageAddress}</Text>
                <Text style={{marginLeft: 10}}>csiministorage.com</Text>
                <Text style={{fontSize: 15, marginTop: 10, marginLeft: 10}}>Units Available</Text>
                <TouchableOpacity style={styles.openButton}
                                  onPress={() => {this.props.navigation.navigate('AccountInfoScreen',
                                    {addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2,
                                     city: this.state.city, state: this.state.state, zip: this.state.zip,
                                     specialInstructions: this.state.specialInstructions, size: 'By Item'}); this.setState({modalVisible:false});
                                   }}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.sectionHeader}>Pay by Item</Text>
                  <Text style={styles.sectionHeader}>$7/bin/month</Text>
                </View>
                <Text style={{color: '#AAB5E0'}}>12'x8' (84 Sq. In.)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.openButton}
                                  onPress={() => {this.props.navigation.navigate('AccountInfoScreen',
                                    {addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2,
                                     city: this.state.city, state: this.state.state, zip: this.state.zip,
                                     specialInstructions: this.state.specialInstructions, size: 'Small'}); this.setState({modalVisible:false});
                                   }}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.sectionHeader}>Small</Text>
                  <Text style={styles.sectionHeader}>$99/month</Text>
                </View>
                <Text style={{color: '#AAB5E0'}}>8.5x6 (20 Bins)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.openButton}
                                  onPress={() => {this.props.navigation.navigate('AccountInfoScreen',
                                    {addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2,
                                     city: this.state.city, state: this.state.state, zip: this.state.zip,
                                     specialInstructions: this.state.specialInstructions, size: 'Medium'}); this.setState({modalVisible:false});
                                   }}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.sectionHeader}>Medium</Text>
                  <Text style={styles.sectionHeader}>$150/month</Text>
                </View>
                <Text style={{color: '#AAB5E0'}}>8.5x12 (50 Bins)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.openButton}
                                  onPress={() => {this.props.navigation.navigate('AccountInfoScreen',
                                    {addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2,
                                     city: this.state.city, state: this.state.state, zip: this.state.zip,
                                     specialInstructions: this.state.specialInstructions, size: 'Large'}); this.setState({modalVisible:false});
                                   }}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.sectionHeader}>Large</Text>
                  <Text style={styles.sectionHeader}>$195/month</Text>
                </View>
                <Text style={{color: '#AAB5E0'}}>8.5x16 (75 Bins)</Text>
                </TouchableOpacity>
              </View>
            </View>
        </Modal>
      </ScrollView>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261136',
    padding: 25,
  },
  findFacilityText: {
    flexDirection: 'row',
    fontSize: 15,
    justifyContent: 'center',
    paddingTop: 5,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  unitSizeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25
  },
  unitColumnView: {
    flexDirection: 'column'
  },
  openButton: {
    backgroundColor: "#7B1FA2",
    borderRadius: 5,
    margin: 10,
    padding: 10,
    borderColor: '#FFF'
  },
  addressInput: {
    backgroundColor: '#F5F5F5',
    height: 40,
    textAlign: 'center'
  },
  map: {
    width: 150,
    height: 150,
    margin: 15,
  },
  selectFacilityModalView: {
    backgroundColor: '#F5F5F5',
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  modalView:{
    flex: 1,
    marginTop: 120,
    marginBottom: 50,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: 'flex-start',
    overflow: "hidden",
  },
  close: {
    margin: 5,
    position: "absolute",
    top: 0,
    right: 0,
    width: 25,
    height: 25,
    color: "#FFF"
  },
  sectionHeader: {
    color: '#FFF',
    fontSize: 25,
  },
});
