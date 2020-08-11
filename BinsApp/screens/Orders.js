import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import Textbox from '../components/Textbox.js'
import {LoginContext} from '../components/LoginProvider.js'
import {Auth} from 'aws-amplify';

export default class Orders extends Component {
  static contextType = LoginContext;
  constructor() {
    super();
    this.state = {
      isLoading: true,
      dataSource: [],
      dateSelected: '',
      timeSelected: '',
      refreshing: false
    }
  }

  renderItem = data => {
    if (data.item.name == Auth.user.attributes.email) {
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
}

_onRefresh = () => {
  this.setState({refreshing: true});
  fetch('http://192.168.1.247:5000/renderorders')
  .then((response) => response.json())
  .then((responseJson) => {
    this.setState({dataSource: responseJson});
  })
  .catch((error) => {
    console.log(error)
  })
  .then(() => {
    this.setState({refreshing: false});
  });
}

componentDidMount() {
  fetch('http://192.168.1.247:5000/renderorders')
  .then((response) => response.json())
  .then((responseJson) => {
    this.setState({dataSource: responseJson, isLoading: false});
  })
  .catch((error) => {
    console.log(error)
  })
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
        <Text style={styles.sectionHeader}>Upcoming Orders</Text>
          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            extraData={this.state}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
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
