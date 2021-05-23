import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import Textbox from '../components/Textbox.js'
import {UserInfoContext} from '../components/Providers/UserInfoProvider.js'
import {Auth} from 'aws-amplify';
import {Url} from '../src/components/url.js';
import moment from "moment";

export default class ViewOrder extends Component {
  static contextType = UserInfoContext;
  constructor() {
    super();
    this.state = {
      isLoading: true,
      dataSource: [],
      refreshing: false,
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
                   body={data.item.jobType}/>
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
    const id = this.props.route.params?.id??'';
    const order = this.context.dataSourceNewOrders.filter(function(item){
      return item.id == id
    })
    this.setState({dataSource: order, isLoading: false, refreshing: false})    
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
