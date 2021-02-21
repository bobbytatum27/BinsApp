import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from '../styles/styles.js'

class LongButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.onPress}
      >
        <Text style={{color: 'white'}}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
export default LongButton;
