import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { styles } from '../styles/styles.js'

class Review extends Component {

  render() {
    return (
        <View style={styles.center}>
          <Text style={{color:'white'}}>Review</Text>
          <Button title ="Confirm"
                  onPress={() => this.props.navigation.navigate('ConfirmationScreen')}/>
        </View>
    );
  }
}

export default Review;
