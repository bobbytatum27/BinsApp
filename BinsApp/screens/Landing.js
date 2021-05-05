import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { styles } from '../styles/styles.js'

import {LoginProvider, LoginContext} from '../components/LoginProvider.js'
import {Auth, API, graphqlOperation } from 'aws-amplify';

export default class Landing extends Component {
  // this is sets Class.context, allows you to access the context via this.context
  // this.context is set to the state of the LoginProvider
  static contextType = LoginContext;

  componentDidMount() {
    this.props.navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    })
  }

  render() {
    return (
      <View style={{flex: 1,
        backgroundColor: '#261136',
        padding: 30}}>
        <View style={{flex:5}}>
        <Text allowFontScaling={false} style={styles.header}>Bins Storage</Text>
          <Text allowFontScaling={false} style={styles.intro}>We help pick up and bring back items that you'd like to store in self-storage.</Text>
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
