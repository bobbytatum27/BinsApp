import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class FormInputHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Enter name here'};
    //prob gonna make that this.props.question so initial text is question
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
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
