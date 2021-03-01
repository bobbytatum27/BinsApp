import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Text, Button, TouchableOpacity, FlatList, StyleSheet, Image, ActivityIndicator, RefreshControl } from 'react-native';
import {LoginContext} from '../components/LoginProvider.js'
import {Auth} from 'aws-amplify';
import { Ionicons } from '@expo/vector-icons';

import Item from '../components/Item.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'
import {Url} from '../src/components/url.js';
import {S3url} from '../src/components/s3url.js';

import moment from "moment";

class Home extends Component {
  static contextType = LoginContext;
  constructor() {
    super();
    this.state = {
      isLoading: true,
      dataSourceStorage: [],
      dataSourceHome: [],
      dataSourceOrders: [],
      email: '',
      refreshing: false,
      id: '',
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
               source={{uri: S3url + item.photo}}/>
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
                 source={{uri: S3url + item.photo}}/>
          <View style={{padding: 10, flexDirection: 'column'}}>
            <Text style={{fontWeight: 'bold'}}>{item.description}</Text>
            <Text>ID #{item.id}</Text>
          </View>
        </View>
    )
  }

  renderOrders = data => {
      return (
        <View style={{flexDirection:'row'}}>
          <View>
            <Text style={{fontSize: 20}}>{moment(data.item.date).format('MMMM DD, YYYY')}, {data.item.time}</Text>
          </View>
          <TouchableOpacity style={{marginLeft: 50}} onPress={() => this.props.navigation.navigate('ViewOrder', {id: data.item.id})}>
            <Text style={{fontWeight:'bold'}}>...</Text>
          </TouchableOpacity>
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
        <View style={{marginBottom: 10}}/>
          {this.state.dataSourceOrders.length == 0 ? (
            <>
            <TouchableOpacity style = {styles.button2} onPress={() => this.props.navigation.navigate('NewAppointment')}>
            <Text style={{fontSize: 25, color: '#FFF'}}>Schedule Appointment</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Upcoming Order</Text>
            <FlatList
              horizontal={true}
              data={this.state.dataSourceOrders.slice(0,1)}
              renderItem={this.renderOrders}
              scrollEnabled={false}
            />
          </View>
          </>
        )}
          <View style={styles.sectionContainer}>
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
              columns={2}
              data={this.state.dataSourceStorage.slice(0,2)}
              renderItem={this.renderItemsInStorage}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={false}
            />
              <TouchableOpacity style={styles.button3} onPress={() => this.props.navigation.navigate('ViewStorageInventory')}>
              <Text style={{color: 'white'}}>VIEW ALL</Text>
              </TouchableOpacity>
            </>
          )}
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Returned Items</Text>
            {this.state.dataSourceHome.length == 0 ? (
              <>
                  <View style = {styles.textbox}>
              <Text style = {{textAlign: 'center'}}>None of Your Items Have Been Returned Yet</Text>
              </View>
            </>
          ) : (
            <>
              <FlatList
                horizontal={true}
                data={this.state.dataSourceHome.slice(0,2)}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                scrollEnabled={false}
              />
              <TouchableOpacity style={styles.button3} onPress={() => this.props.navigation.navigate('HomeInventoryScreen')}>
              <Text style={{color: 'white'}}>VIEW ALL</Text>
              </TouchableOpacity>
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
    backgroundColor: '#261136',
  },
  sectionContainer:{
    margin:15,
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 25,
  },
  sectionHeader: {
    color: '#000',
    fontSize: 25,
    marginBottom: 10,
  },
  button: {
    marginRight: 30,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#7B1FA2',
    padding: 10,
    margin: 15,
    borderRadius: 5,
 },
 button3: {
   alignItems: 'center',
   backgroundColor: '#7B1FA2',
   padding: 10,
   marginTop: 15,
   borderRadius: 5
},
  textbox: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5
  },
})
