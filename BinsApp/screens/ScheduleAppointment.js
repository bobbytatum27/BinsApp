import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { styles } from '../styles/styles.js'

class ScheduleAppointment extends Component {

  render() {
    return (
        <View style={styles.center}>
          <Text style={{color:'white'}}>Calendar</Text>
          <Button title ="Next"
                  onPress={() => this.props.navigation.navigate('ReviewScreen')}/>
        </View>
    );
  }
}

export default ScheduleAppointment;
