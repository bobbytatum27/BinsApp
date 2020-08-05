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
        placeholder={this.props.defaultText}
        placeholderTextColor={this.props.defaultTextColor}
        onChangeText={this.props.onChangeText}
        style={this.props.style}
        keyboardType={this.props.keyboardType}
        secureTextEntry={this.props.secureTextEntry}
        defaultValue={this.props.defaultValue}
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
  },
  textInput: {
    height: 100, // For dimensions
    borderRadius: 2, // How round is the text box
    borderWidth: 2, // Set border width.
    borderColor: '#000000', // Set border Hex Color Code Here
    color: '#000000', // Setting up Text Font Color.
    backgroundColor : '#FFFFFF', // Setting Up Background Color of Text component.
    padding : 2, // Adding padding on Text component.
    fontSize: 14,
    // textAlign: 'center',
    margin: 10,
  },
});

/*
<View style={{ paddingTop: 30 }}>
        <TextInput
          style={this.props.style}
          placeholder={this.props.title}
          placeholderTextColor={this.props.titleColor}
          multiline={this.props.multiline}
          autoCapitalize={this.props.autocapital}
          underlineColorAndroid={this.props.underlineColor}
          onChangeText={this.props.onChangeText}
          // value={this.state.finalText} // THIS LINE DIDN'T LET THE USER CHANGE THE TEXT
        />
</View>
*/
