import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import {LoginContext} from '../components/LoginProvider.js'
import {Auth} from 'aws-amplify';
import {Url} from '../src/components/url.js';
import moment from "moment";

export default class UpcomingOrders extends Component {
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
        <TouchableOpacity style={styles.orderbox} onPress={() => this.props.navigation.navigate('ViewOrder', {id: data.item.id})}>
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
          <FlatList
            style={{flexGrow: 0}}
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
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('PastOrders')}
            style = {{alignItems: 'center',
                      backgroundColor: '#7B1FA2',
                      padding: 10,
                      marginTop: 15,
                      marginLeft: 130,
                      marginRight: 130,
                      borderRadius: 20, }} >
            <Text style = {{color: 'white'}}>View Past Orders</Text>
          </TouchableOpacity>
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
  }
  });
