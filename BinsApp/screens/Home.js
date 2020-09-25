import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Text, Button, TouchableOpacity, FlatList, StyleSheet, Image, ActivityIndicator, RefreshControl } from 'react-native';
import {LoginContext} from '../components/LoginProvider.js'
import {Auth} from 'aws-amplify';
import { Ionicons } from '@expo/vector-icons';

import Item from '../components/Item.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'
import {Url} from '../src/components/url.js';

class Home extends Component {
  static contextType = LoginContext;
  constructor() {
    super();
    this.state = {
      isLoading: true,
      dataSourceStorage: [],
      dataSourceHome: [],
      dateSourceOrders: [],
      email: ' ',
      refreshing: false,
    }
  }

  fetchData() {
    let email = ''
    Auth.currentUserInfo().then((userInfo) => {
      const { attributes = {} } = userInfo;
      email = attributes['email'];
    })
    fetch(Url+'/render')
    .then((response) => response.json())
    .then((responseJson) => {
      const responseJson2 = responseJson.filter(function(item){
        return item.isInStorage == 'No' && item.owner == email
      });
      const responseJson3 = responseJson.filter(function(item){
        return item.isInStorage == 'Yes' && item.owner == email
      });
      this.setState({dataSourceHome: responseJson2})
      this.setState({dataSourceStorage: responseJson3})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  fetchOrders(){
    let email = ''
    Auth.currentUserInfo().then((userInfo) => {
      const { attributes = {} } = userInfo;
      email = attributes['email'];
    })
    fetch(Url+'/renderorders')
    .then((response) => response.json())
    .then((responseJson) => {
      const responseJson2 = responseJson.filter(function(item){
        return item.name == email
      });
      this.setState({dataSourceOrders: responseJson2, isLoading:false, refreshing: false});
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
      return (
      <View style = {styles.button}>
        <Image style={{width: 150, height: 150}}
               source={{uri: item.photo}}/>
        <View style={{padding: 10, flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold'}}>{item.description}</Text>
          <Text>ID #{item.id}</Text>
        </View>
      </View>
    )
  }

  renderItemsInStorage = ({item}) => {
      return (
        <View style = {styles.button}>
          <Image style={{width: 150, height: 150}}
                 source={{uri: item.photo}}/>
          <View style={{padding: 10, flexDirection: 'column'}}>
            <Text style={{fontWeight: 'bold'}}>{item.description}</Text>
            <Text>ID #{item.id}</Text>
          </View>
        </View>
    )
  }

  renderOrders = data => {
      return (
        <View style = {styles.textbox}>
        <Text style={{fontSize: 31}}>Order Date: {data.item.date}</Text>
        <Text style={{fontSize: 31}}>Order Time: {data.item.time}</Text>
        </View>
    )
  }

  onRefresh = () => {
    this.setState({refreshing: true});
    this.fetchData();
    this.fetchOrders();
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
        <ScrollView refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
            tintColor = 'white'  />
        }>
          <View>
            <Text style={styles.sectionHeader}>Upcoming Orders</Text>
          {this.state.dataSourceOrders.length == 0 ? (
            <>
                <View style = {styles.textbox}>
            <Text style = {{textAlign: 'center'}}>No Upcoming Orders</Text>
            </View>
          </>
        ) : (
          <>
            <FlatList
              horizontal={true}
              data={this.state.dataSourceOrders}
              renderItem={this.renderOrders}/>
            <LongButton title ="VIEW ALL"
                        onPress={() => this.props.navigation.navigate('Orders')}/>
          </>
        )}
          </View>
          <View style={{marginBottom: 25}}>
            <Text style={styles.sectionHeader}>Items in Storage</Text>
            {this.state.dataSourceStorage.length == 0 ? (
              <>
                  <View style = {styles.textbox}>
              <Text style = {{textAlign: 'center'}}>No Items Yet - Will Appear Once You Have Items</Text>
              </View>
            </>
          ) : (
            <>
            <FlatList
              horizontal={true}
              data={this.state.dataSourceStorage}
              renderItem={this.renderItemsInStorage}
              keyExtractor={(item, index) => index.toString()}
            />
              <LongButton
               title ="VIEW ALL"
               onPress={() => this.props.navigation.navigate('StorageInventoryScreen')}/>
            </>
          )}
          </View>
          <View style={{marginBottom: 25}}>
            <Text style={styles.sectionHeader}>Items with You</Text>
            {this.state.dataSourceHome.length == 0 ? (
              <>
                  <View style = {styles.textbox}>
              <Text style = {{textAlign: 'center'}}>No Items Yet - Will Appear Once You Have Items</Text>
              </View>
              <LongButton
               title ="CREATE A NEW BIN"
               onPress={() => this.props.navigation.navigate('NewItemScreen')}/>
            </>
          ) : (
            <>
              <FlatList
                horizontal={true}
                data={this.state.dataSourceHome}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
              <LongButton
               title ="VIEW ALL"
               onPress={() => this.props.navigation.navigate('HomeInventoryScreen')}/>
            </>
          )}
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
