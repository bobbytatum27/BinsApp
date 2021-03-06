import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import {LoginContext} from '../components/LoginProvider.js'
import {Auth} from 'aws-amplify';
import DropDownPicker from 'react-native-dropdown-picker';
import {Url} from '../src/components/url.js';
import moment from "moment";

export default class PastOrders extends Component {
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
    }
  }

  renderItem = data => {
      return (
        <TouchableOpacity style={styles.orderbox} onPress={() => this.props.navigation.navigate('ViewPastOrder', {id: data.item.id})}>
          <View>
            <Text style={{fontWeight:"bold"}}>{moment(data.item.date).format('dddd, MMMM DD, YYYY')}</Text>
            <Text>{data.item.time} | {data.item.type}</Text>
          </View>
          <Text>></Text>
        </TouchableOpacity>
      )
    }

  onRefresh = () => {
    this.setState({refreshing: true});
    this.fetchData();
  }

  fetchData(){
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
        {this.state.dataSource.length == 0 ? (
          <>
          <View style = {styles.textbox}>
            <Text style = {{textAlign: 'center'}}>None of Your Items Have Been Returned Yet</Text>
          </View>
        </>
      ) : (
        <>
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
  orderbox:{
    padding: 15,
    backgroundColor: "white",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  textbox: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    padding: 10,
    margin: 15,
    borderRadius: 5
  },
  });
