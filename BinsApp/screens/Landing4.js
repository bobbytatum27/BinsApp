import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { styles } from '../styles/styles.js'

export default class Landing4 extends Component {
  render() {
    return (
      <View style={{flex: 1,
                    backgroundColor: '#261136',
                    padding: 30}}>
        <View style={{flex:5}}>
        <Text allowFontScaling={false} style={{fontSize: 40, textAlign: 'center', color: 'white', marginBottom: 30, marginTop: 100}}>Request Deliveries</Text>
        <Text allowFontScaling={false} style={styles.intro}>When you want your items back, simply request a delivery and we'll bring it back.</Text>
        <Text allowFontScaling={false} style={styles.intro}>Avoid renting a truck, hiring movers, or just the inconvinience of constantly having to drive to the facility.</Text>
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
