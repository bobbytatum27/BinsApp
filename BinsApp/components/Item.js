import React, { Component } from 'react';
import { Image, View, Text} from 'react-native';

class Item extends Component {
  render() {
    return (
      <View
        style={{
          height: 150,
          width: 160,
          backgroundColor: 'white',
          borderColor: 'black',
          borderWidth: '1',
          marginBottom: 35
        }}>
        <Image
          style={{width: 158, height: 100}}
          source={{uri: this.props.url}}/>
        <Text>{this.props.name}</Text>
        <Text>{this.props.number}</Text>
      </View>
    );
  }
}
export default Item;
