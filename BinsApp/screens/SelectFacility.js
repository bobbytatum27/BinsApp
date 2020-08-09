import React from 'react';
import { Modal, SafeAreaView, StyleSheet, Text, TouchableHighlight, View, TextInput, Picker, FlatList, Button, Alert, Image } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import StorageCompanyCard from '../components/StorageCompanyCard'
import LongButton from '../components/LongButton.js'

export default class SelectFacility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unitSize: '',    // may want error handling in case they try and press without selecting unit size
      selectFacilityModal: false,
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      specialInstructions: '',
    };
  }

  UnitSizeSeparator = () => {
    return(
      <View style={{padding: 5}}>
      </View>
    )
  }

  // TODO: make sure the tab formatting is correct, some might be off (maybe)
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.findFacilityText}>Let's find a facility based on your needs:</Text>
        <Text style ={styles.descriptionText}>Address Line 1</Text>
        <FormInputHandler
          defaultText='Address Line 1'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(text) => this.setState({addressLine1: text})}
        />
        <Text style ={styles.descriptionText}>Address Line 2</Text>
        <FormInputHandler
          defaultText='Address Line 2'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(text) => this.setState({addressLine2: text})}
        />
        <Text style ={styles.descriptionText}>City</Text>
        <FormInputHandler
          defaultText='City'
          defaultTextColor='#8B8B8B'
          style={styles.userInfoText}
          onChangeText={(text) => this.setState({city: text})}
        />
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
          <View style={{flex:1}}>
            <Text style ={styles.descriptionText}>State</Text>
            <FormInputHandler
              defaultText='State'
              defaultTextColor='#8B8B8B'
              style={styles.userInfoText}
              onChangeText={(text) => this.setState({state: text})}
            />
          </View>
          <View style={{flex:1}}>
            <Text style ={styles.descriptionText}>Zip</Text>
            <FormInputHandler
              defaultText='Zip Code'
              style={styles.userInfoText}
              defaultTextColor='#8B8B8B'
              onChangeText={(text) => this.setState({zip: text})}
            />
          </View>
        </View>
        <Text style ={styles.descriptionText}>Special Instructions</Text>
        <FormInputHandler
            defaultText='Ex: Gate code, apartment number'
            style={styles.userInfoText}
            defaultTextColor='#8B8B8B'
            onChangeText={(text) => this.setState({specialInstructions: text})}
        />

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
              this.state.unitSize == ''  ? Alert.alert('select unit size/input address') :
                this.props.navigation.navigate('AccountInfoScreen', 
                  {addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2, 
                   city: this.state.city, state: this.state.state, zip: this.state.zip, 
                   specialInstructions: this.state.specialInstructions});
            }}
          />
        </View>
      </View>
    );
  }


  // THIS IS THE CODE FOR THE MODAL in case we determine it should be added back in
  /*
    <View style={styles.selectFacilityModalView}>
          <Modal
            animationType='fade'
            transparent={true}
            visible={this.state.selectFacilityModal}
          >
            <SafeAreaView style={styles.selectFacilityModalView}>
              <StorageCompanyCard
                companyName="CubeSmart"
                onPress={()=>{
                  this.setState({ selectFacilityModal: false })
                  this.props.navigation.navigate('AccountInfoScreen')
                }}
              />
              <StorageCompanyCard
                companyName="Extra Space Storage"
                onPress={()=>{
                  this.setState({ selectFacilityModal: false })
                  this.props.navigation.navigate('AccountInfoScreen')
                }}
              />
              <StorageCompanyCard
                companyName="Public Storage"
                onPress={()=>{
                  this.setState({ selectFacilityModal: false })
                  this.props.navigation.navigate('AccountInfoScreen')
                }}
              />
              <View style={{alignItems: 'center'}}>
                <Image
                  style={styles.map}
                  source={{uri: 'https://i.pinimg.com/originals/0a/50/5a/0a505ae5b9946975cd2347d222c5cc8a.png'}}
                />
              </View>
              <Button
                title='Cancel'
                onPress={() => this.setState({ selectFacilityModal: false })}
              />
            </SafeAreaView>
          </Modal>
        </View>
  */

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
    borderRadius: 20,
    elevation: 2,
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
});
