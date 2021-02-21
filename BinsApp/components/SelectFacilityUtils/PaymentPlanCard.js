import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

/*
 * Small info card that describes a unit type & its price (i.e. 2'x4' @ $134/month)
 *
 * Props:
 * 1. onPress - Function to call when item card is pressed
 * 2. unitSize: The size of the unit
 * 3. unitPrice: Price of unit (recommended: pass in string as $x/month)
 * 4. unitDescription: A short description to conceptualize the unit size (i.e. Bedroom Closet)
 */
export default PaymentPlanCard = (props) => {
    return (
        <TouchableOpacity style={styles.OpenButton} onPress={props.onPress}>
          <View style={styles.PaymentPlanInfoContainer}>
            <Image style={{flex:1, width: 110, height: 110}} source={props.source}/>
            <View style={{margin: 5}}/>
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.SectionHeader}>{props.unitSize} {props.unitDescription}</Text>
              <View style={{flexDirection:'row'}}>
                <Text style={{color: '#AAB5E0', fontSize: 15}}>{props.ft}</Text>
                <Text style={{color: '#AAB5E0', fontSize: 10, lineHeight: 10}}>3</Text>
              </View>
              <Text style={{fontSize: 16, color: '#FFF', fontWeight: 'bold'}}>{props.unitPrice}</Text>
            </View>
          </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  OpenButton: {
      backgroundColor: "#7B1FA2",
      borderRadius: 5,
      margin: 10,
      padding: 10,
      borderColor: '#FFF'
  },
  PaymentPlanInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  SectionHeader: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center'
  },
})


/*
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
                */
