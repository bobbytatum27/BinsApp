import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class InputValidator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        validInput: false,
        validUI: true,
    };
  }

  invalidInput = () => this.setState({validInput: false, validUI: false})
  validInput = () => this.setState({validInput: true, validUI: true})

  render() {
    return (
        <View>
            <Text style={{...styles.descriptionText, color: this.state.validUI ? 'white' : 'red'}}>{this.props.titleText} {this.state.validUI ? '' : ' - ' + this.props.errorMessage}</Text>
            <TextInput
                placeholder={this.props.defaultText}
                placeholderTextColor={this.props.defaultTextColor}
                onChangeText={this.props.onChangeText}
                style={this.props.style}
                keyboardType={this.props.keyboardType}
                secureTextEntry={this.props.secureTextEntry}
                keyboardType={this.props.keyboardType}
                autoCapitalize={this.props.autoCapitalize}
                returnKeyType={this.props.returnKeyType}
                onBlur={() => {
                    this.props.checkInput() ? this.validInput() : this.invalidInput()
                }}
                onEndEditing={() => {
                    this.props.checkInput() ? this.validInput() : this.invalidInput()
                }}
            />
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
  descriptionText:{
    marginBottom: -10,
    marginLeft: 15,
    color: 'white',
  },
});
