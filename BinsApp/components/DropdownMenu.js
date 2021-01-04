import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

class DropdownMenu extends Component {
  render() {
    return (
      <DropDownPicker
        items={this.props.items}
        placeholder={this.props.placeholder}
        onChangeItem={this.props.onChangeItem}
        defaultValue={this.props.defaultValue}
        zIndex={this.props.zIndex}
        arrowSize={10}
        arrowColor={"#FFF"}
        itemStyle={{justifyContent: 'flex-start'}}
        containerStyle={{margin: 15, height: 50}}
        style={{backgroundColor: '#261136', borderColor: '#4826A0', borderTopLeftRadius: 5, borderTopRightRadius: 5, borderBottomLeftRadius: 5, borderBottomRightRadius: 5,}}
        placeholderStyle={{color: '#FFF', textAlign: 'center'}}
        selectedLabelStyle={{color: '#FFF', textAlign: 'center'}}
      />
    );
  }
}
export default DropdownMenu;
