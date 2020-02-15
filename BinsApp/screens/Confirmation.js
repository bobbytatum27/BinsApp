import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { styles } from '../styles/styles.js'
import Textbox from '../components/Textbox.js'

class Confirmation extends Component {

  render() {
    return (
        <View style={styles.center}>
          <Text style={{color:'white', fontSize: 30, marginBottom: 20, marginTop: -120}}>Your Order Has Been Placed Successfully!</Text>
          <Textbox header='Date and Time'
                   body='Monday, January 1, 2020'
                   body2='8am - 10am'/>
          <Textbox header='Address'
                   body='123 New York Avenue'
                   body2='Los Angeles, CA 91362'/>
          <Textbox header='Order Type'
                   body='Pickup'/>
          <Button title ="VIEW SCHEDULED ORDERS"
                  onPress={() => this.props.navigation.navigate('')}/>
          <Button title ="MAKE ANOTHER ORDER"
                  onPress={() => this.props.navigation.navigate('HomeScreen')}/>
        </View>
    );
  }
}

export default Confirmation;
