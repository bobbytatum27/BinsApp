import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView,} from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import { UserInfoContext } from '../components/Providers/UserInfoProvider.js';
import {Auth} from 'aws-amplify';
import { Ionicons } from '@expo/vector-icons';
import {Url} from '../src/components/url.js';
import InputValidator from '../components/InputValidator.js'
import {ZipCodes} from '../src/components/zipcodes.js';
import DropdownMenu from '../components/DropdownMenu.js'

export default class EditAddress extends React.Component {
  static contextType = UserInfoContext;

  constructor(props) {
    super(props);
    this.state = {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: 'CA',
      zip: '',
      specialInstructions: '',
      building: '',
      parking: '',

    }
  }
  checkAddress = () => ZipCodes.includes(this.state.zip);

  findUnit = () => {
    if (this.state.addressLine1 == '' || this.state.city == '' || this.state.state == '' || this.state.zip == '' || this.state.building == '' || this.state.parking == '') {
      Alert.alert('You\'ve left an important field empty in your address!');
    } else if (this.checkAddress()){
      this.context.updateUserAddress(this.context.email, this.state)
      Alert.alert("Your Information Has Been Saved");
    } else {
      Alert.alert('Sorry, there are no available facilities near this address yet');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
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
          /><InputValidator
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
                editable={false}
                titleText='State'
                defaultText='CA'
                defaultTextColor='#FFF'
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
          <Text allowFontScaling={false} style={styles.descriptionText}>Building Type</Text>
          <DropdownMenu
            items={[
                  {label: 'House', value: 'House'},
                  {label: 'Apartment', value: 'Apartment'}
            ]}
            placeholder={"Select an Option"}
            onChangeItem={(item) => this.setState({building: item.value})}
            zIndex={2}
          />
          <Text allowFontScaling={false} style={styles.descriptionText}>Where to Park</Text>
          <DropdownMenu
            items={[
                  {label: 'In Front of Building', value: 'In Front of Building'},
                  {label: 'Driveway', value: 'Driveway'},
                  {label: 'Parking Lot', value:'Parking Lot'},
            ]}
            placeholder={"Select an Option"}
            onChangeItem={(item) => this.setState({parking: item.value})}
            zIndex={1}
          />
          <View style={{margin: 50}}/>
        </ScrollView>
        <View style={{justifyContent: 'flex-end'}}>
          <LongButton
            title="SAVE INFO"
            onPress={this.findUnit}
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
});
