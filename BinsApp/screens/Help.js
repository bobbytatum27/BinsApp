import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default class Help extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style = {styles.sectionHeader}>Help/FAQs</Text>
        <ScrollView>
          <Text style={styles.header}>What is Bins?</Text>
          <Text style={styles.text}>Bins provides valet or full-service storage, offering tenants the option to have items picked up or delivered, removing the hassle of having to lift or drive.</Text>
          <Text style={styles.header}>Where is Bins Offered?</Text>
          <Text style={styles.text}>You can find storage facilities near you that have partnered with Bins. Your items will be stored in that facility.</Text>
          <Text style={styles.header}>How Do I Request an Order?</Text>
          <Text style={styles.text}>Simply press "Request a Delivery" or "Request a Pickup" and select the items you want stored. Then, schedule you appointment and we'll come by to pick up/drop off your items.</Text>
          <Text style={styles.header}>How Do I Create a New Bin?</Text>
          <Text style={styles.text}>First, pack up a bin with the belongings you want. Then, under "Items with You", you can create a new item by taking a photo and addding a description. Now it will be ready to be stored.</Text>
          <Text style={styles.header}>How Do I Cancel an Order?</Text>
          <Text style={styles.text}>You can call ________ or email ________ to cancel an order. All orders must be canceled 24 hours before the scheduled time.</Text>
          <Text style={styles.header}>Question</Text>
          <Text style={styles.text}>Answer</Text>
          <Text style={styles.header}>Question</Text>
          <Text style={styles.text}>Answer</Text>
        </ScrollView>
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
    sectionHeader: {
      color: '#AAB5E0',
      fontSize: 25,
      marginLeft: 15
    },
    text: {
      color: '#AAB5E0',
      fontSize: 15,
      marginLeft: 15,
      marginTop: 5,
      marginRight: 10,
    },
    header: {
      color: 'white',
      fontSize: 20,
      marginLeft: 15,
      marginTop: 15,
      marginRight: 15,
    }
  }
)
