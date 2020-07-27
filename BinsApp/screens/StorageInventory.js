import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity } from 'react-native';

import { styles } from '../styles/styles.js'

import Item from '../components/Item.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'

export default class StorageInventory extends Component {

  render() {
    return (
      <ScrollView>
        <View style={styles.center}>

            <Text style={styles.sectionHeader}>Items in Storage</Text>
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
                <Item name='  Electronics'
                    number='  ID 123456'/>
                <Item name='  Electronics'
                    number='  ID 123456'/>
                <Item name='  Electronics'
                      number='  ID 123456'/>
                <Item name='  Electronics'
                      number='  ID 123456'/>
              </View>
              <LongButton title ="DELIVER SELECTED ITEMS TO ME"
                      onPress={() => this.props.navigation.navigate('ScheduleAppointmentScreen')}/>

        </View>
      </ScrollView>
    );
  }
}
