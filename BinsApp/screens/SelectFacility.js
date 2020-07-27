import React from 'react';
import { Modal, SafeAreaView, StyleSheet, Text, TouchableHighlight, View, TextInput, Picker, FlatList, Button, Alert, Image } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import StorageCompanyCard from '../components/StorageCompanyCard'

export default class SelectFacility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressText: '',
      unitSize: '',    // may want error handling in case they try and press without selecting unit size
      selectFacilityModal: false
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
        <View style={{padding: 25}}>
          <FormInputHandler
            defaultText='Enter your address here'
            defaultTextColor='gray'
            onChangeText={(val) => this.setState({addressText: val})}
            style={styles.addressInput}
          />
        </View>

        <Text style={{...styles.findFacilityText, paddingTop: 40}}>Now select the unit size you want: </Text>
        <View style={styles.unitSizeView}>
            <View style={styles.unitColumnView}>
              <TouchableHighlight
                style={styles.openButton}
                onPress={() => this.setState({ unitSize: '5x5' })}
              >
                <Text> 5x5</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.openButton}
                onPress={() => this.setState({ unitSize: '5x10' })}
              >
                <Text>5x10</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.unitColumnView}>
              <TouchableHighlight
                style={styles.openButton}
                onPress={() => this.setState({ unitSize: '10x10' })}
              >
                <Text>10x10</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.openButton}
                onPress={() => this.setState({ unitSize: '10x15' })}
              >
                <Text>10x15</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.unitColumnView}>
              <TouchableHighlight
                style={styles.openButton}
                onPress={() => this.setState({ unitSize: '15x15' })}
              >
                <Text>15x15</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.openButton}
                onPress={() => this.setState({ unitSize: '15x20' })}
              >
                <Text>15x20</Text>
              </TouchableHighlight>
            </View>
         </View>

        <View style={{paddingTop: 40}}>
          <Button
            title='Find a Unit!'
            onPress={() => {
              this.state.unitSize == ''  ? Alert.alert('select unit size/input address') :
                this.setState({ selectFacilityModal: true })
            }}
          />
        </View>

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

      </View>
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
    paddingTop: 15,
    textAlign: 'center',
    color: 'white'
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
    backgroundColor: "#F194FF",
    borderRadius: 20,
    elevation: 2,
    margin: 5,
    padding: 10,
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
  }
});
