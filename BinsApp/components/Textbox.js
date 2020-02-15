import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';


class Textbox extends Component {
  render() {
    return (
      <View style={{height: 100,
                    width: 350,
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    justifyContent: "space-around",
                    marginBottom: 10,
                    marginTop: 10}
                  }>
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
    marginLeft: 10,
  },
  body: {
    fontSize: 30,
    marginLeft: 10,
  },
});
