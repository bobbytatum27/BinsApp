import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import Textbox from '../components/Textbox.js'
import {LoginContext} from '../components/LoginProvider.js'
import {Auth} from 'aws-amplify';
import DropDownPicker from 'react-native-dropdown-picker';
import {Url} from '../src/components/url.js';

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
        <View style={{marginTop: 20}}>
        <Textbox header='Date and Time'
                 body={data.item.date}
                 body2={data.item.time}/>
        <Textbox header='Address'
                 body={data.item.address}/>
        <Textbox header='Order Type'
                 body='Pickup'/>
        <Textbox header='Items'
                 body={data.item.items}/>
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
    if (val == 'Past') {
    this.fetchPastOrders();
    } else {
      this.fetchData();
    }
  }

  fetchData(){
    fetch(Url+'/renderorders')
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
    fetch(Url+'/renderpastorders')
    .then((response) => response.json())
    .then((responseJson) => {
      const responseJson2 = responseJson.filter(function(item){
        return item.name == Auth.user.attributes.email
      });
      this.setState({dataSource: responseJson2, isLoading: false});
      console.log(this.state.dataSource);
    })
    .then(() => {
     this.setState({refreshing: false});
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
