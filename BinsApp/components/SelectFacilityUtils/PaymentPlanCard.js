import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
            <Text style={styles.SectionHeader}>{props.unitSize}</Text>
            <Text style={styles.SectionHeader}>{props.unitPrice}</Text>
          </View>
          <Text style={{color: '#AAB5E0'}}>{props.unitDescription}</Text>
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
    justifyContent: 'space-between',
  },
  SectionHeader: {
    color: '#FFF',
    fontSize: 25,
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