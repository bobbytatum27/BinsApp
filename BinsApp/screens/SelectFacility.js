import React from 'react';
import { Modal, SafeAreaView, StyleSheet, Text, TouchableHighlight, View, TextInput, Picker, FlatList, Button, Alert, Image, ScrollView } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import StorageCompanyCard from '../components/StorageCompanyCard'
import LongButton from '../components/LongButton.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import InputValidator from '../components/InputValidator.js'

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
    };
  }

  // I think this is no longer in use, it was for the flatlist that got taken out
  UnitSizeSeparator = () => {
    return(
      <View style={{padding: 5}}>
      </View>
    )
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
          onChangeText={(text) => this.setState({addressLine2: text})}
          errorMessage='Do not leave this field empty!'
          checkInput={() => true /*this field is optional, so automatically valid*/}
        />
        <InputValidator
          titleText='City'
          defaultText='City'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
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
              onChangeText={(text) => this.setState({state: text})}
              errorMessage='Do not leave this field empty!'
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
          onChangeText={(text) => this.setState({specialInstructions: text})}
          errorMessage='Do not leave this field empty!'
          checkInput={() => true /*this field is optional, so automatically valid*/}
        />

        {this.state.storageCardIsVisible ? (
          <>
          <View style={{padding: 15, marginTop: 15}}>
            <Text style={{fontSize: 15, color: 'white', marginBottom: 15, textAlign: 'center'}}>Here's what we found based on your address above.</Text>
            <TouchableOpacity onPress={() => {this.setState({modalVisible:true})
            }}>
              <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 10, borderRadius: 10}}>
                <View style={{flex: 1}}>
                  <Image style={{width: 50, height: 50}} source={require('../photos/csimini.png') }/>
                </View>
                <View style={{flex: 5, backgroundColor: 'white', height: 50, paddingLeft: 10}}>
                  <Text style={{fontSize: 20}}>CSI Mini Storage</Text>
                  <Text>855 Parr Boulevard, Richmond, CA 94801</Text>
                  <Text>Unit: {this.state.unitSize} @ $50/month.</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{height: 5}}>
            </View>
            <TouchableOpacity onPress={() => {
              this.state.unitSize == ''  ? Alert.alert('select unit size/input address') :
              this.props.navigation.navigate('AccountInfoScreen',
                {addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2,
                 city: this.state.city, state: this.state.state, zip: this.state.zip,
                 specialInstructions: this.state.specialInstructions});
            }}>
              <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 10, borderRadius: 10}}>
                <View style={{flex: 1}}>
                  <Image style={{width: 50, height: 50}} source={require('../photos/csimini.png') }/>
                </View>
                <View style={{flex: 5, backgroundColor: 'white', height: 50, paddingLeft: 10}}>
                  <Text style={{fontSize: 20}}>CSI Mini Storage</Text>
                  <Text>51 West Hornet Ave., Alameda, CA 94501</Text>
                  <Text>Unit: {this.state.unitSize} @ $50/month.</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          </>
        ) : (
          <>
          <Text style={{...styles.findFacilityText, paddingTop: 40}}>Now select the unit size you want: </Text>
          <View style={styles.unitSizeView}>
              <View style={styles.unitColumnView}>
                <TouchableHighlight
                  style={{...styles.openButton, borderWidth: this.state.unitSize == '5x5' ? 2 : 0}}
                  onPress={() => this.setState({ unitSize: '5x5' })}
                  underlayColor='white'
                >
                  <Text style={{color:'white'}}> 5x5</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{...styles.openButton, borderWidth: this.state.unitSize == '5x10' ? 2 : 0}}
                  onPress={() => this.setState({ unitSize: '5x10' })}
                  underlayColor='white'
                >
                  <Text style={{color:'white'}}>5x10</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.unitColumnView}>
                <TouchableHighlight
                  style={{...styles.openButton, borderWidth: this.state.unitSize == '10x10' ? 2 : 0}}
                  onPress={() => this.setState({ unitSize: '10x10' })}
                  underlayColor='white'
                >
                  <Text style={{color:'white'}}>10x10</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{...styles.openButton, borderWidth: this.state.unitSize == '10x15' ? 2 : 0}}
                  onPress={() => this.setState({ unitSize: '10x15' })}
                  underlayColor='white'
                >
                  <Text style={{color:'white'}}>10x15</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.unitColumnView}>
                <TouchableHighlight
                  style={{...styles.openButton, borderWidth: this.state.unitSize == '15x15' ? 2 : 0}}
                  onPress={() => this.setState({ unitSize: '15x15' })}
                  underlayColor='white'
                >
                  <Text style={{color:'white'}}>15x15</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{...styles.openButton, borderWidth: this.state.unitSize == '15x20' ? 2 : 0}}
                  onPress={() => this.setState({ unitSize: '15x20' })}
                  underlayColor='white'
                >
                  <Text style={{color:'white'}}>15x20</Text>
                </TouchableHighlight>
              </View>
          </View>

          <View style={{paddingTop: 40}}>
          <LongButton
            title='Find a Unit!'
            onPress={() => {
              if (this.state.unitSize == '') {
                Alert.alert('Please select a unit size.');
              } else if (this.state.addressLine1 == '' || this.state.city == '' || this.state.state == '' || this.state.zip == '') {
                Alert.alert('You\'ve left an important field empty in your address!');
              } else {
                this.setState({storageCardIsVisible: true});
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
                <Text style={{marginLeft: 10}}>855 Parr Boulevard, Richmond, CA 94801</Text>
                <Text style={{marginLeft: 10}}>csiministorage.com</Text>
                <Text style={{fontSize: 15, marginTop: 10, marginLeft: 10}}>Units Available</Text>
                <TouchableOpacity style={styles.openButton}
                                  onPress={() => {this.props.navigation.navigate('AccountInfoScreen',
                                    {addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2,
                                     city: this.state.city, state: this.state.state, zip: this.state.zip,
                                     specialInstructions: this.state.specialInstructions}); this.setState({modalVisible:false});
                                   }}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.sectionHeader}>Small</Text>
                  <Text style={styles.sectionHeader}>$99/month</Text>
                </View>
                <Text style={{color: '#AAB5E0'}}>8.5x6 (51 Sq. Ft.)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.openButton}
                                  onPress={() => {this.props.navigation.navigate('AccountInfoScreen',
                                    {addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2,
                                     city: this.state.city, state: this.state.state, zip: this.state.zip,
                                     specialInstructions: this.state.specialInstructions}); this.setState({modalVisible:false});
                                   }}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.sectionHeader}>Medium</Text>
                  <Text style={styles.sectionHeader}>$150/month</Text>
                </View>
                <Text style={{color: '#AAB5E0'}}>8.5x12 (102 Sq. Ft.)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.openButton}
                                  onPress={() => {this.props.navigation.navigate('AccountInfoScreen',
                                    {addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2,
                                     city: this.state.city, state: this.state.state, zip: this.state.zip,
                                     specialInstructions: this.state.specialInstructions}); this.setState({modalVisible:false});
                                   }}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.sectionHeader}>Large</Text>
                  <Text style={styles.sectionHeader}>$195/month</Text>
                </View>
                <Text style={{color: '#AAB5E0'}}>8.5x16 (136 Sq. Ft.)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.openButton}
                                  onPress={() => {this.props.navigation.navigate('AccountInfoScreen',
                                    {addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2,
                                     city: this.state.city, state: this.state.state, zip: this.state.zip,
                                     specialInstructions: this.state.specialInstructions}); this.setState({modalVisible:false});
                                   }}>
                <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.sectionHeader}>Pay by Item</Text>
                  <Text style={styles.sectionHeader}>$7/bin/month</Text>
                </View>
                <Text style={{color: '#AAB5E0'}}>12'x8' (84 Sq. In.)</Text>
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
