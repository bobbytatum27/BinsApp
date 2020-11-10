import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default class Help extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <ScrollView>
        <Text style = {styles.sectionHeader}>General</Text>
          <Text style={styles.header}>What is Bins Storage?</Text>
          <Text style={styles.text}>Bins is a platform that connects storage facilities, customers, and drivers. Our platform facilitates valet/full-service storage, offering tenants the option to have items picked up or delivered, removing the hassle of having to lift or drive.</Text>
          <Text style={styles.header}>What is Bins Storage?</Text>
          <Text style={styles.text}>Bins is a platform that connects storage facilities, customers, and drivers. Our platform facilitates valet/full-service storage, offering tenants the option to have items picked up or delivered, removing the hassle of having to lift or drive.</Text>
          <Text style={styles.header}>Where is Bins Offered?</Text>
          <Text style={styles.text}>You can store items in any of the storage facilities that have partnered with Bins. Currently, we are in the San Francisco Bay area, but we are planning on expanding to other regions soon.</Text>
          <Text style={styles.header}>What’s the difference between valet storage and self storage?</Text>
          <Text style={styles.text}>With self storage, the tenant is responsible for everything - packing, driving, and moving into the unit. With valet storage, drivers will pick up or deliver your items, removing the need to physically go to the storage facility.</Text>
          <Text style={styles.header}>How do I get started?</Text>
          <Text style={styles.text}>Download our app and follow the instructions to get started.</Text>

          <Text style = {styles.sectionHeader}>Pricing and Payments</Text>
          <Text style={styles.header}>How much does storage cost?</Text>
          <Text style={styles.text}>Bins offers a variety of different plans and options, so tenants can browse and select a plan that works best for them.</Text>
          <Text style={styles.header}>When will I be billed?</Text>
          <Text style={styles.text}>You will be charged on the day your items are moved into storage, and monthly thereafter. You will also be charged for new pickups and deliveries.</Text>
          <Text style={styles.header}>How do I pay?</Text>
          <Text style={styles.text}>We accept payment from most major credit cards.</Text>

          <Text style = {styles.sectionHeader}>Storing</Text>
          <Text style={styles.header}>What size are the bins?</Text>
          <Text style={styles.text}>All bins are 60cm x 40cm x 31.5cm.</Text>
          <Text style={styles.header}>Can you store large or bulky items?</Text>
          <Text style={styles.text}>Yes, you can store furniture and other large items with us.</Text>

          <Text style = {styles.sectionHeader}>Orders</Text>
          <Text style={styles.header}>How Do I Request an Order?</Text>
          <Text style={styles.text}>Simply navigate to your items and select the items that you’d like to store or have returned. Then, schedule your appointment and we'll come by to pick up/drop off your items.</Text>
          <Text style={styles.header}>How Do I Create a New Bin?</Text>
          <Text style={styles.text}>First, pack up a bin with the belongings you want. Then, under "Items with You", you can create a new item by taking a photo and adding a description. Now it will be ready to be picked up and stored.</Text>
          <Text style={styles.header}>How Much Does an Order Cost?</Text>
          <Text style={styles.text}>Each facility will have their own delivery costs. Typically, the initial pick-up is free, and any orders after that are $20.</Text>
          <Text style={styles.header}>How Do I Cancel an Order?</Text>
          <Text style={styles.text}>You can call or email to cancel an order. All orders must be canceled 24 hours before the scheduled time.</Text>
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
      textAlign: 'center',
      marginTop: 40,
      marginBottom: 25,
    },
    text: {
      color: '#FFF',
      fontSize: 15,
      marginLeft: 15,
      marginTop: 5,
      marginRight: 15,
    },
    header: {
      color: '#AAB5E0',
      fontSize: 20,
      marginLeft: 15,
      marginTop: 15,
      marginRight: 15,
    }
  }
)
