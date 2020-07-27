import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity } from 'react-native';

import { styles } from '../styles/styles.js'

import Item from '../components/Item.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'

export default class HomeInventory extends Component {

  render() {
    return (
    <View style={styles.center}>
      <ScrollView>
            <Text style={styles.sectionHeader}>Items with You</Text>
            <Text style={styles.menuFilter}>DATE ADDED (NEWEST)</Text>
              <View style={styles.box}>
              <View
                style={{
                  height: 150,
                  width: 160,
                  borderColor: 'grey',
                  borderStyle: 'dashed',
                  borderWidth: '2',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 15
                }}>
                <Text style = {{color:'grey'}}>Add New</Text>
                <Button title = 'Click Here'
                        onPress = {() => this.props.navigation.navigate('NewItemScreen')}/>
              </View>
                <Item name='Electronics'/>
              </View>
              <LongButton title ="DELIVER SELECTED ITEMS TO ME"
                      onPress={() => this.props.navigation.navigate('ScheduleAppointmentScreen')}/>
          </ScrollView>
        </View>
    );
  }
}
