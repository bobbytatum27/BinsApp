import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Pickup extends Component {

  constructor() {
    super();
    this.state = {
      type: "Pickup",
    }
  }

  render() {
    return (
      <View style={ styles.container}>
          <Text style={styles.text}>Details for parking, items, elevator, etc.</Text>
        <TouchableOpacity style={styles.button3} onPress={() => this.props.navigation.navigate('ScheduleAppointmentScreen', {type: this.state.type})}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 25,
      backgroundColor: '#261136',
    },
    button3: {
     alignItems: 'center',
     backgroundColor: '#7B1FA2',
     padding: 10,
     margin: 15,
     borderRadius: 5
   },
   text: {
     color: '#FFF',
     fontSize: 16,
   }
  }
)
