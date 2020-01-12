import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from '../styles/styles.js'

class Login extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.header}>Bins</Text>
        <Text style={styles.intro}>We help pick up and bring back items</Text>
        <Text style={styles.intro}>that you'd like to store in self-storage.</Text>
        <Text style={styles.intro2}>Swipe to learn more.</Text>
        <Text style={styles.intro3}>Discover fell-service storage near you</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Route2')}
          title='Find a Unit' />
      </View>
    );
  }
}

export default Login;
