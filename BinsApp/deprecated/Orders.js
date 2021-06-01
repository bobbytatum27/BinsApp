import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import Textbox from '../components/Textbox.js'
import {LoginContext} from '../components/LoginProvider.js'
import {Auth} from 'aws-amplify';
import DropDownPicker from 'react-native-dropdown-picker';
import {Url} from '../src/components/url.js';
import moment from "moment";

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
        <TouchableOpacity style={{padding: 15, backgroundColor: "white", marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: 'center'}} onPress={() => this.props.navigation.navigate('ViewOrder', {id: data.item.id})}>
          <View>
            <Text allowFontScaling={false} style={{fontWeight:"bold"}}>{moment(data.item.date).format('dddd, MMMM DD, YYYY')}</Text>
            <Text allowFontScaling={false}>{data.item.time} | {data.item.type}</Text>
          </View>
          <Text allowFontScaling={false}>></Text>
        </TouchableOpacity>
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
