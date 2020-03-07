import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class StorageCompanyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Filler'};
  }

  render() {
    return (
      <View style={{ borderColor: '#d6d7da', flexDirection: 'column', padding: 5}}>
        <Text style={{fontSize: 25}}>{this.props.companyName} </Text>
          <Text >Address</Text>
          <Text>Price</Text>
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
  }
});
