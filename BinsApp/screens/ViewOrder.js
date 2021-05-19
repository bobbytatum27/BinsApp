import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import Textbox from '../components/Textbox.js'
import {LoginContext} from '../components/Providers/LoginProvider.js'
import {Auth} from 'aws-amplify';
import {Url} from '../src/components/url.js';
import moment from "moment";

export default class ViewOrder extends Component {
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
      id: ''
    }
  }

  renderItem = data => {
      return (
        <View style={{marginTop: 0}}>
          <Textbox header='Date and Time'
                   body={moment(data.item.date).format('MMMM DD, YYYY')}/>
          <Textbox header='Time'
                   body={data.item.time}/>
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
      this.fetchData();
    }

  fetchData(){
    fetch(Url+'/renderorders')
    .then((response) => response.json())
    .then((responseJson) => {
      const id = this.props.route.params?.id??'';
      const responseJson2 = responseJson.filter(function(item){
        return item.id == id
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
  }
  });
