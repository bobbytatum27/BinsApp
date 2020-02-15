import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity } from 'react-native';

import { styles } from '../styles/styles.js'

import Item from '../components/Item.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'

class Inventory extends Component {

  render() {
    return (
      <ScrollView>
        <View style={styles.center}>
          <View style={{flex:1, padding: 30}}>
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
              </View>
              <Button title ="DELIVER SELECTED ITEMS TO ME"
                      onPress={() => this.props.navigation.navigate('ScheduleAppointmentScreen')}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Inventory;
