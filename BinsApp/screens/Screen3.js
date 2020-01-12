import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { styles } from '../styles/styles.js'

import Item from '../components/Item.js'

class Screen3 extends Component {

  render() {
    return (
      <View style={styles.center}>
        <View style={{ width: 350, height: 450, marginTop: 10}}>
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
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}>
            <Text style={{color: 'white'}}> REQUEST A DELIVERY </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Screen3;
