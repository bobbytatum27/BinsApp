import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';


class Textbox extends Component {
  render() {
    return (
      <View style={{
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    padding: 10,
                    marginLeft: 15,
                    marginRight: 15,
                    marginBottom: 1,
                  }}>
        <Text style={styles.header}>{this.props.header}</Text>
        <Text style={styles.body}>{this.props.body}</Text>
        <Text style={styles.body}>{this.props.body2}</Text>
      </View>
    );
  }
}
export default Textbox;

const styles = StyleSheet.create({
  header: {
    fontSize: 12,
  },
  body: {
    fontSize: 25,
  },
});
