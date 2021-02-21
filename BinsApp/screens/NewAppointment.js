import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class NewAppointment extends Component {
  render() {
    return (
      <View style={ styles.container}>
        <TouchableOpacity style={styles.button3} onPress={() => this.props.navigation.navigate('StorageInventoryScreen')}>
          <Text style={styles.text}>Deliver Items to Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => this.props.navigation.navigate('Pickup')}>
          <Text style={styles.text}>Pick Up Items From Me</Text>
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
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
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
