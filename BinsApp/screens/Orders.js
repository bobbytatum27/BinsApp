import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import Textbox from '../components/Textbox.js'
import {LoginContext} from '../components/LoginProvider.js'
import {Auth} from 'aws-amplify';
import DropDownPicker from 'react-native-dropdown-picker';

export default class Orders extends Component {
  static contextType = LoginContext;
  constructor() {
    super();
    this.state = {
      isLoading: true,
      dataSource: [],
      dateSelected: '',
      timeSelected: '',
      refreshing: false,
      email: '',
      filter: 'Upcoming',
    }
  }

  renderItem = data => {
      return (
        <View style = {{margin: 10, backgroundColor: '#E5E7E9', borderRadius: 15}}>
        <Textbox header='Date and Time'
                 body={data.item.date}
                 body2={data.item.time} />
        <View style = {styles.lineStyle} />
        <Textbox header='Address'
                 body={data.item.address}/>
        <View style = {styles.lineStyle} />
        <Textbox header='Order Type'
                 body='Pickup'/>
        </View>
      )
    }

  onRefresh = () => {
    this.setState({refreshing: true});
    if (this.state.filter == 'Upcoming') {
    this.fetchData();
    } else {
    this.fetchPastOrders();
    }
  }

  onSort(val) {
    this.setState({filter:val});
    console.log(val, this.state.filter);
    if (val == 'Past') {
    this.fetchPastOrders();
    } else {
      this.fetchData();
    }
  }

  getEmail(){
    Auth.currentUserInfo().then((userInfo) => {
      const { attributes = {} } = userInfo;
      this.setState({email:attributes['email']});
    })
  }

  fetchData(){
    fetch('http://192.168.1.247:5000/renderorders')
    .then((response) => response.json())
    .then((responseJson) => {
      const responseJson2 = responseJson.filter(function(item){
        return item.name == Auth.user.attributes.email
      });
      this.setState({dataSource: responseJson2, isLoading: false});
    })
    .then(() => {
     this.setState({refreshing: false});
    })
    .catch((error) => {
      console.log(error)
    })
  }

  fetchPastOrders(){
    fetch('http://192.168.1.247:5000/renderpastorders')
    .then((response) => response.json())
    .then((responseJson) => {
      const responseJson2 = responseJson.filter(function(item){
        return item.name == Auth.user.attributes.email
      });
      this.setState({dataSource: responseJson2, isLoading: false});
    })
    .then(() => {
     this.setState({refreshing: false});
    })
    .catch((error) => {
      console.log(error)
    })
  }

  componentDidMount() {
    this.getEmail();
    this.fetchData();
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
        <Text style={styles.sectionHeader}>Orders</Text>
        <DropDownPicker
          items={[
                {label: 'Upcoming', value: 'Upcoming'},
                {label: 'Past', value: 'Past'}
          ]}
          placeholder={"Upcoming"}
          arrowSize={10}
          itemStyle={{justifyContent: 'flex-start'}}
          containerStyle={{marginLeft: 15, marginBottom: 5, height: 35, width: 110}}
          onChangeItem={item => {this.onSort(item.value)}}
        />
          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            extraData={this.state}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
                tintColor = 'white'  />
            }
          />
          </>
        )}
      </View>
    );
  }
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261136',
    padding: 25
  },
  userInfoText: {
    borderColor: '#4826A0',
    borderWidth: 1,
    textAlign: 'center',
    color: 'white',
    margin: 15,
    padding: 15,
  },
  descriptionText:{
    marginBottom: -10,
    marginLeft: 15,
    color: 'white',
  },
  questionText: {
    fontSize: 20,
    paddingTop: 15
  },
  header: {
    color: '#AAB5E0',
    fontSize: 25,
    margin: 15,
    justifyContent: 'center',
  },
  sectionHeader: {
    color: '#AAB5E0',
    fontSize: 25,
    marginLeft: 15,
    marginBottom: 25
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    marginLeft: 25,
    marginRight: 25,
  },
  });
