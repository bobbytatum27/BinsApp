import React from 'react';
import { Modal, SafeAreaView, StyleSheet, Text, TouchableHighlight, View, TextInput, Picker, FlatList, Button, Alert, Image, ScrollView } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import StorageCompanyCard from '../components/StorageCompanyCard'
import LongButton from '../components/LongButton.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import InputValidator from '../components/InputValidator.js'
import {ZipCodes} from '../src/components/zipcodes.js';
import DropdownMenu from '../components/DropdownMenu.js'

// The new imports, TODO: need to remove now useless imports above
import FacilitySummaryCard from '../components/SelectFacilityUtils/FacilitySummaryCard.js';
import FacilityModal from '../components/SelectFacilityUtils/FacilityModal.js'

export default class SelectFacility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unitSize: '',    // I think this is deprecated
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      specialInstructions: '',
      modalVisible: false,
      storageAddress: '',
      building: '',
      parking: '',
    };
  }


  /*
   *
   */
  findUnit = () => {
    if (this.state.addressLine1 == '' || this.state.city == '' || this.state.state == '' || this.state.zip == '' || this.state.building == '' || this.state.parking == '') {
      Alert.alert('You\'ve left an important field empty in your address!');
    } else if (this.checkAddress()){
      this.setState({storageCardIsVisible: true});
    } else {
      Alert.alert('Sorry, there are no available facilities near you yet');
    }
  }

  /*
   * Helper which is called when a unit is selected. Passess address data (might just be zipcode soon)
   * to next screen and navigates to Account creation screen.
   *
   * @param unitSize: A string representing the size of the unit
   */
  selectPaymentPlan = (unitSize) => {
    let addressData = {
      addressLine1: this.props.route.params.addressLine1,
      addressLine2: this.props.route.params.addressLine2,
      city: this.props.route.params.city,
      state: this.props.route.params.state,
      zip: this.props.route.params.zip,
      specialInstructions: this.props.route.params.specialInstructions,
      size: unitSize,
      parking: this.props.route.params.parking,
      building: this.props.route.params.building,
    };

    this.props.navigation.navigate('AccountInfoScreen', addressData);
    this.setState({modalVisible:false});
  }

  /*
   * Closes the Payment Plan Modal
   */
  closeModal = () => {
    this.setState({modalVisible: false})
  }

  // TODO: make sure the tab formatting is correct, some might be off (maybe)
  render() {
    return (
      <ScrollView style = {styles.container}>
            <View>
              <Text style={{fontSize: 15, color: 'white', marginBottom: 15, textAlign: 'center'}}>Here's what we found based on your address above.</Text>
              <View style={{height: 5}}>{/*for padding purposes*/}</View>
              <FacilitySummaryCard
                src={require('../photos/csimini.png')}
                onPress={() => {this.setState({modalVisible:true, storageAddress: '855 Parr Boulevard, Richmond, CA 94801'})}}
                address='855 Parr Boulevard, Richmond, CA 94801'
              />
            </View>
        <FacilityModal
          modalVisible={this.state.modalVisible}
          src={require('../photos/csimini.png')}
          onIconPress={this.closeModal}
          facilityName='CSI Mini Storage'
          facilityAddress={this.state.storageAddress}
          facilityWebsite='csiministorage.com'
          onSelectPaymentPlan={this.selectPaymentPlan}
        />

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
    borderRadius: 5,
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


/*
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
                <Text style={{fontSize: 15, marginTop: 10, marginLeft: 10}}>Options Available</Text>
                <ScrollView>
                <TouchableOpacity style={styles.openButton}
                                  onPress={() => {this.props.navigation.navigate('AccountInfoScreen',
                                    {addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2,
                                     city: this.state.city, state: this.state.state, zip: this.state.zip,
                                     specialInstructions: this.state.specialInstructions, size: 'By Item'}); this.setState({modalVisible:false});
                                   }}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.sectionHeader}>Pay By Bin</Text>
                  <Text style={styles.sectionHeader}>$7/month</Text>
                </View>
                <Text style={{color: '#AAB5E0'}}>60x40x31.5cm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.openButton}
                                  onPress={() => {this.props.navigation.navigate('AccountInfoScreen',
                                    {addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2,
                                     city: this.state.city, state: this.state.state, zip: this.state.zip,
                                     specialInstructions: this.state.specialInstructions, size: '2x2'}); this.setState({modalVisible:false});
                                   }}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.sectionHeader}>2'x2' </Text>
                  <Text style={styles.sectionHeader}>$79/month</Text>
                </View>
                <Text style={{color: '#AAB5E0'}}>16 cubic ft - Hall Closet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.openButton}
                                  onPress={() => {this.props.navigation.navigate('AccountInfoScreen',
                                    {addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2,
                                     city: this.state.city, state: this.state.state, zip: this.state.zip,
                                     specialInstructions: this.state.specialInstructions, size: '2x4'}); this.setState({modalVisible:false});
                                   }}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.sectionHeader}>2'x4'</Text>
                  <Text style={styles.sectionHeader}>$99/month</Text>
                </View>
                <Text style={{color: '#AAB5E0'}}>32 cubic feet - Bedroom Closet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.openButton}
                                  onPress={() => {this.props.navigation.navigate('AccountInfoScreen',
                                    {addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2,
                                     city: this.state.city, state: this.state.state, zip: this.state.zip,
                                     specialInstructions: this.state.specialInstructions, size: '5x5'}); this.setState({modalVisible:false});
                                   }}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.sectionHeader}>5'x5'</Text>
                  <Text style={styles.sectionHeader}>$134/month</Text>
                </View>
                <Text style={{color: '#AAB5E0'}}>100 cubic feet - Walk-in Closet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.openButton}
                                  onPress={() => {this.props.navigation.navigate('AccountInfoScreen',
                                    {addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2,
                                     city: this.state.city, state: this.state.state, zip: this.state.zip,
                                     specialInstructions: this.state.specialInstructions, size: '5x10'}); this.setState({modalVisible:false});
                                   }}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.sectionHeader}>5'x10'</Text>
                  <Text style={styles.sectionHeader}>$157/month</Text>
                </View>
                <Text style={{color: '#AAB5E0'}}>200 cubic feet - Studio Apt.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.openButton}
                                  onPress={() => {this.props.navigation.navigate('AccountInfoScreen',
                                    {addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2,
                                     city: this.state.city, state: this.state.state, zip: this.state.zip,
                                     specialInstructions: this.state.specialInstructions, size: '5x15'}); this.setState({modalVisible:false});
                                   }}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.sectionHeader}>5'x15'</Text>
                  <Text style={styles.sectionHeader}>$191/month</Text>
                </View>
                <Text style={{color: '#AAB5E0'}}>300 cubic feet - Small 1BR Apt.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.openButton}
                                  onPress={() => {this.props.navigation.navigate('AccountInfoScreen',
                                    {addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2,
                                     city: this.state.city, state: this.state.state, zip: this.state.zip,
                                     specialInstructions: this.state.specialInstructions, size: '10x10'}); this.setState({modalVisible:false});
                                   }}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.sectionHeader}>10'x10'</Text>
                  <Text style={styles.sectionHeader}>$236/month</Text>
                </View>
                <Text style={{color: '#AAB5E0'}}>400 cubic feet - 1BR Apt.</Text>
                </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
        </Modal>
        */
