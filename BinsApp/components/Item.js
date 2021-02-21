import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

class Item extends Component {
  render() {
    return (
      <View style = {styles.button}>
        <Image style={{width: 150, height: 150}} source={this.props.source}/>
        <View style={{padding: 10, flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold'}}>{data.item.description}</Text>
          <Text>#{data.item.id}</Text>
          <TouchableOpacity
            style = {styles.button, data.item.selectedClass}
            onPress={() => {this.selectItem(data); this.getSelected(this.state.dataSource);}}>
              {data.item.isSelect ? (
                <Text>Selected</Text>
              ) : (
                <Text>Press</Text>
              )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Item;

const styles = StyleSheet.create({
  button: {
    margin: 15,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
  },
  selected: {
    margin: 15,
    alignItems: 'center',
    height: 174,
    width: 160,
    backgroundColor: 'white',
    borderColor: '#7B1FA2',
    borderWidth: 5
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    margin: 15,
    borderRadius: 3,
 },
  textbox: {
    flexDirection: 'column',
    backgroundColor: '#E5E7E9',
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 1,
    borderRadius: 5
  },
})
