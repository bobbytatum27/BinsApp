import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Text, Button, TouchableOpacity, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import {LoginContext} from '../components/LoginProvider.js'
import {Auth} from 'aws-amplify';
import DropDownPicker from 'react-native-dropdown-picker';

import Item from '../components/Item.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'

class Home extends Component {
  static contextType = LoginContext;
  constructor() {
    super();
    this.state = {
      isLoading: true,
      dataSource: [],
      dateSourceOrders: [],
    }
  }

  fetchData() {
    fetch('http://192.168.1.247:5000/render')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource: responseJson
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  fetchOrders(){
    fetch('http://192.168.1.247:5000/renderorders')
    .then((response) => response.json())
    .then((responseJson) => {
      const responseJson2 = responseJson.filter(function(item){
        return item.name == Auth.user.attributes.email
      });
      this.setState({dataSourceOrders: responseJson2, isLoading:false});
    })
    .catch((error) => {
      console.log(error)
    })
  }

  componentDidMount() {
    this.fetchData();
    this.fetchOrders();
  }

  renderItem = ({item}) => {
    if (item.owner == Auth.user.attributes.email && item.isInStorage == 'No') {
      return (
      <View style = {styles.button}>
        <Image style={{width: 150, height: 150}}
               source={{uri: item.photo}}/>
        <View>
          <Text>
            {item.description}
          </Text>
        </View>
      </View>
    )
  }
  }

  renderItemsInStorage = ({item}) => {
    if (item.owner == Auth.user.attributes.email && item.isInStorage == 'Yes') {
      return (
      <View style = {styles.button}>
        <Image style={{width: 150, height: 150}}
               source={{uri: item.photo}}/>
        <View>
          <Text>
            {item.description}
          </Text>
        </View>
      </View>
    )
  }
  }

  renderOrders = data => {
      return (
        <View style = {styles.textbox}>
        <Text style={{fontSize: 31}}>Order Date: {data.item.date}</Text>
        <Text style={{fontSize: 31}}>Order Time: {data.item.time}</Text>
        </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
      {this.state.isLoading ? (
      <>
        <View>
          <ActivityIndicator />
        </View>
      </>
    ) : (
      <>
        <ScrollView>
          <View style={{marginBottom: 25}}>
            <Text style={styles.sectionHeader}>Upcoming Orders</Text>
            <FlatList
              horizontal={true}
              data={this.state.dataSourceOrders}
              renderItem={this.renderOrders}/>
            <LongButton title ="VIEW ALL"
                        onPress={() => this.props.navigation.navigate('Orders')}/>
          </View>
          <View style={{marginBottom: 25}}>
            <Text style={styles.sectionHeader}>Items in Storage</Text>
            <FlatList
              horizontal={true}
              data={this.state.dataSource}
              renderItem={this.renderItemsInStorage}
              keyExtractor={(item, index) => index.toString()}
            />
              <LongButton
               title ="REQUEST A DELIVERY"
               onPress={() => this.props.navigation.navigate('StorageInventoryScreen')}/>
          </View>
          <View style={{marginBottom: 25}}>
            <Text style={styles.sectionHeader}>Items with You</Text>
              <FlatList
                horizontal={true}
                data={this.state.dataSource}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
              <LongButton
               title ="REQUEST A PICKUP"
               onPress={() => this.props.navigation.navigate('HomeInventoryScreen')}/>
          </View>
        </ScrollView>
      </>
    )}
    </View>);
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#261136',
  },
  sectionHeader: {
    color: '#AAB5E0',
    fontSize: 25,
    marginBottom: 10,
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
