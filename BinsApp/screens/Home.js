import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity } from 'react-native';

import { styles } from '../styles/styles.js'

import Item from '../components/Item.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'

class Home extends Component {

  render() {
    return (
      <ScrollView>
        <View style={styles.center}>
          <View style={{flex:1, padding: 30}}>
            <Text style={styles.sectionHeader}>Next Order</Text>
            <Textbox header='Date and Time'
                     body='Monday, January 1, 2020'
                     body2='8am - 10am'/>
            <LongButton title ="VIEW ALL"/>
          </View>
          <View style={{flex:1, padding: 30}}>
            <Text style={styles.sectionHeader}>Items in Storage</Text>
            <Text style={styles.menuFilter}>DATE ADDED (NEWEST)</Text>
              <View style={styles.box}>
                <Item name='  Electronics'
                    number='  ID 123456'
                    url='../photos/electronics.jpg'/>
                <Item name='  Electronics'
                    number='  ID 123456'/>
                <Item name='  Electronics'
                    number='  ID 123456'/>
                <Item name='  Electronics'
                    number='  ID 123456'/>
              </View>
              <Button
               title ="REQUEST A DELIVERY"
               onPress={() => this.props.navigation.navigate('InventoryScreen')}/>
          </View>
          <View style={{flex:1, padding: 30}}>
            <Text style={styles.sectionHeader}>Items with You</Text>
            <Text style={styles.menuFilter}>DATE ADDED (NEWEST)</Text>
              <View style={styles.box}>
                <Item name='  Electronics'
                    number='  ID 123456'/>
                <Item name='  Electronics'
                    number='  ID 123456'/>
                <Item name='  Electronics'
                    number='  ID 123456'/>
                <Item name='  Electronics'
                    number='  ID 123456'/>
              </View>
              <LongButton title ="REQUEST A PICKUP"/>
          </View>

        </View>
      </ScrollView>
    );
  }
}

export default Home;
