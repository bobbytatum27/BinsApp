import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { styles } from '../styles/styles.js'

export default class Landing3 extends Component {
  render() {
    return (
      <View style={{flex: 1,
                    backgroundColor: '#261136',
                    padding: 30}}>
        <View style={{flex:5}}>
        <Text allowFontScaling={false} style={{fontSize: 40, textAlign: 'center', color: 'white', marginBottom: 30, marginTop: 100}}>Manage Inventory</Text>
        <Text allowFontScaling={false} style={styles.intro}>Easily view your belongings from your phone or desktop. You can edit your items or add new ones to the database.</Text>
        <Text allowFontScaling={false} style={styles.intro}>Swipe to learn more.</Text>
        </View>
        <View style={{flex:5}}>
        <Text allowFontScaling={false} style={styles.intro3}>Discover full-service storage near you</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddressInfo')}
          style = {{alignItems: 'center',
                    backgroundColor: '#E0B141',
                    padding: 7,
                    marginTop: 15,
                    marginLeft: 120,
                    marginRight: 120,
                    borderRadius: 20, }} >
          <Text allowFontScaling={false}>Find a Unit</Text>
        </TouchableOpacity>
        </View>
        <View style={{flex:3}}>
        <Text allowFontScaling={false} style={{textAlign: 'center',
          color: 'gray',
          fontSize: 15,
          marginTop: 100}}>Returing User?</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          title='LOGIN'
          color= 'white' />
      </View>
    </View>
    );
  }
  }
