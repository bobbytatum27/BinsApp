import React from 'react';
import {Text, View, Modal, StyleSheet, ScrollView, Image} from 'react-native'

import PaymentPlanCard from './PaymentPlanCard.js'

import { Ionicons } from '@expo/vector-icons';

/*
 *
 * Props:
 * 1. modalVisible:
 * 2. src: Source URL for the facility's image
 * 3. onIconPress
 * 4. facilityName
 * 5. facilityAddress
 * 6. facilityWebsite
 * 7. onSelectPaymentPlan
 *    *** This is prop drilling I think,
 *       but it's only 3 total layers so
 *       I'm leaving it for now. ***
 *
 *
 *
 * IMPORTANT: Improvement to be made: Use hooks and functional components (esp the useCallback hook
 * so the onPress prop arg is not a function copy created every time the PaymentCard component is made)
 * Refer to this for why: https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889
 * In essence: we need to make components as pure as possible, and hooks with function components are a really good way of doing this
 */
export default class FacilityModal extends React.Component {
    constructor(props) {
        // note: this is not deprecated (if you see strikthrough)
        // this is a react issue
        super(props);

        this.state = {
            a: 4
        }
    }

    render() {
        return (
            <Modal visible={this.props.modalVisible} transparent={true}>
                <View style={styles.ModalView}>
                  <View style={styles.FacilityImageContainer}>
                    <Image resizeMode={'contain'} source={this.props.src} style={{flex: 1}} />
                  </View>
                  <Ionicons style={styles.CloseModalButton} name="ios-close-circle" size={25} onPress={this.props.onIconPress}/>

                  <View style={{flex: 2, margin: 10}}>
                    <Text style={{fontSize: 30, marginLeft: 10}}>{this.props.facilityName}</Text>
                    <Text style={{marginLeft: 10}}>{this.props.facilityAddress}</Text>
                    <Text style={{marginLeft: 10}}>{this.props.facilityWebsite}</Text>
                    <Text style={{fontSize: 15, marginLeft: 10, marginTop: 10}}>Options Available</Text>
                    <ScrollView>
                      <PaymentPlanCard
                        onPress={() => this.props.onSelectPaymentPlan("Pay By Bin")}
                        unitSize='Pay By Bin'
                        unitPrice='$7/month'
                        unitDescription='60x40x31.5cm Bin'
                      />
                      <PaymentPlanCard
                        onPress={() => this.props.onSelectPaymentPlan("2'x2'")}
                        unitSize="2'x2'"
                        unitPrice='$79/month'
                        unitDescription='16 Cubic ft - Hall Closet'
                      />
                      <PaymentPlanCard
                        onPress={() => this.props.onSelectPaymentPlan("2'x4'")}
                        unitSize="2'x4'"
                        unitPrice='$99/month'
                        unitDescription='32 Cubic ft - Bedroom Closet'
                      />
                      <PaymentPlanCard
                        onPress={() => this.props.onSelectPaymentPlan("5'x5'")}
                        unitSize="5'x5'"
                        unitPrice='$134/month'
                        unitDescription='100 Cubic ft - Walk-In Closet'
                      />
                      <PaymentPlanCard
                        onPress={() => this.props.onSelectPaymentPlan("5'x10'")}
                        unitSize="5'x10'"
                        unitPrice='$157/month'
                        unitDescription='200 Cubic ft - Studio Apartment'
                      />
                      <PaymentPlanCard
                        onPress={() => this.props.onSelectPaymentPlan("5'x15'")}
                        unitSize="5'x15'"
                        unitPrice='$191/month'
                        unitDescription='300 Cubic ft - Small 1BR Apt.'
                      />
                      <PaymentPlanCard
                        onPress={() => this.props.onSelectPaymentPlan("10'x10'")}
                        unitSize="10'x10'"
                        unitPrice='$236/month'
                        unitDescription='400 Cubic ft - 1BR Apt.'
                      />
                    </ScrollView>
                  </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
  ModalView:{
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
  FacilityImageContainer: {
      flex: 1,
      alignItems: 'center',
  },
  CloseModalButton: {
      margin: 5,
      position: "absolute",
      top: 0,
      right: 0,
      width: 25,
      height: 25,
      color: "#FFF"
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
