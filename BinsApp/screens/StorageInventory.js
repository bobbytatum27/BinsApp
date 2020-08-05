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
      selectedItems: ''
    }
  }

  selectItem = data => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect
     ? styles.button2: styles.button;

  const index = this.state.dataSource.findIndex(
     item => data.item.id === item.id
  );
  this.state.dataSource[index] = data.item;
   this.setState({
     dataSource: this.state.dataSource
   });
  };

  renderItem = data => {
    if (data.item.isInStorage == 'Yes' && data.item.owner == Auth.user.attributes.email) {
      return (
      <TouchableOpacity
        style={styles.button, data.item.selectedClass}
        onPress={() => this.selectItem(data)}>
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
  componentDidMount() {
    fetch('http://192.168.1.247:5000/render')
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson = responseJson.map(item => {
        item.isSelect = false;
        item.selectedClass = styles.button;
        return item;
      });
      this.setState({dataSource: responseJson});
    })
    .catch((error) => {
      console.log(error)
    })
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
                      onPress={() => this.props.navigation.navigate('ScheduleAppointmentScreen')}/>
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
  button2: {
    margin: 15,
    alignItems: 'center',
    height: 170,
    width: 152,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 5
  },
})
