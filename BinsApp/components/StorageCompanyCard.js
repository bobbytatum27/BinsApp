import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class StorageCompanyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Filler'};
  }

  render() {
    return (
      <View style={styles.parentView}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={{fontSize: 25}}>{this.props.companyName} </Text>
          <Text >Address</Text>
          <Text>Price</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parentView: { 
    borderColor: '#d6d7da', flexDirection: 'column', padding: 5, borderWidth: 2
  },
});
