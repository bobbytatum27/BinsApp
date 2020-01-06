import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { styles } from '../styles/styles.js'

class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.center}>
      <TextInput
        style={{height: 40}}
        placeholder="Address: "
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
        <Button onPress={() => this.props.navigation.navigate('Route3')}
                title='Feed Item' />
      </View>
    );
  }
}

export default Screen2;
