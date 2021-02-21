import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';


class Textbox extends Component {
  render() {
    return (
      <View style={styles.textbox}
                        onPress={this.props.onPress}>
        <Text style={styles.header}>{this.props.header}:</Text>
        <Text style={styles.body}>{this.props.body}</Text>
      </View>
    );
  }
}
export default Textbox;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    margin: 10
  },
  body: {
    fontSize: 20,
    margin: 10,
    flexShrink: 1,
    textAlign: 'right'
  },
  textbox: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 5,
    justifyContent: 'space-between',
    marginBottom: 1
  }
});
