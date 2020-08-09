import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import {LoginContext} from '../components/LoginProvider.js'
import {Auth} from 'aws-amplify';

import Item from '../components/Item.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'

export default class StorageInventory extends Component {
  static contextType = LoginContext;
  constructor() {
    super();
    this.state = {
      dataSource: [],
      selected: [],
      type: "Delivery",
    }
  }

  selectItem = data => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect
     ? styles.selected: styles.button;

  const index = this.state.dataSource.findIndex(
     item => data.item.id === item.id
  );
  this.state.dataSource[index] = data.item;
   this.setState({
     dataSource: this.state.dataSource
   });
  };

  renderItem = data => {
    if (data.item.owner == Auth.user.attributes.email && data.item.isInStorage == 'Yes') {
      return (
      <TouchableOpacity
        style={styles.button, data.item.selectedClass}
        onPress={() => {this.selectItem(data); this.getSelected(this.state.dataSource);}}>
        <Image style={{width: 150, height: 150}}
               source={{uri: data.item.photo}}/>
        <View>
          <Text>
            {data.item.description}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

getSelected = array => {
  const arr = array.filter(d => d.isSelect)
  const result = arr.map(a => a.description)
  this.setState({selected: result})
}

  fetchData() {
    fetch('http://192.168.1.247:5000/render')
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson = responseJson.map(item => {
        item.isSelect = false;
        item.selectedClass = styles.button;
        return item;
      });
      const responseJson2 = responseJson.filter(function(item){
        return item.isInStorage == 'Yes' && item.owner == Auth.user.attributes.email
      });
      this.setState({dataSource: responseJson2});
    })
    .catch((error) => {
      console.log(error)
    })
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionHeader}>Items in Storage</Text>
            <Text style={styles.menuFilter}>DATE ADDED (NEWEST)</Text>
                <FlatList
                  numColumns={2}
                  data={this.state.dataSource}
                  renderItem={this.renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  extraData={this.state}
                />
            <LongButton title ="DELIVER SELECTED ITEMS TO ME"
                      onPress={() => {this.props.navigation.navigate('ScheduleAppointmentScreen', {selected: this.state.selected, type: this.state.type})}}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#261136',
  },
  sectionHeader: {
    color: '#AAB5E0',
    fontSize: 25,
    marginBottom: 25,
    marginLeft: 15
  },
  menuFilter: {
    color: 'white',
    fontSize: 10,
    marginLeft: 15,
  },
  button: {
    margin: 15,
    alignItems: 'center',
    height: 170,
    width: 152,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1
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
})
