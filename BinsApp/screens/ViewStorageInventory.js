import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity, FlatList, StyleSheet, Image, RefreshControl, Alert } from 'react-native';
import {LoginContext} from '../components/LoginProvider.js'
import {Auth} from 'aws-amplify';
import DropDownPicker from 'react-native-dropdown-picker';

import Item from '../components/Item.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'
import {Url} from '../src/components/url.js';

export default class ViewStorageInventory extends Component {
  static contextType = LoginContext;
  constructor() {
    super();
    this.state = {
      dataSource: [],
      selected: [],
      type: "Delivery",
      refreshing: false,
      filter: '',
      id: '',
    }
  }

  selectItem = data => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect
     ? styles.selected: styles.button;

  const index = this.state.dataSource.findIndex(
     item => data.item.id === item.id
  );
  this.state.dataSource[index] = data.item;
   this.setState({
     dataSource: this.state.dataSource
   });
  };

  renderItem = data => {
      return (
        <View style={styles.item}>
          <Image style={{width: 150, height: 150}}
                 source={{uri: data.item.photo}}/>
          <View style={{padding: 10, flexDirection: 'column'}}>
            <Text style={{fontWeight: 'bold'}}>{data.item.description}</Text>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>ID #{data.item.id}</Text>
            </View>
        </View>
      </View>
    )
  }

    getSelected = array => {
      const arr = array.filter(d => d.isSelect)
      const result = arr.map(a => a.description)
      const result2 = arr.map(a => a.id)
      this.setState({selected: result, id: result2})
    }

  onRefresh = () => {
     this.setState({refreshing: true});
     this.fetchData();
   }

   onSort(val) {
     this.setState({filter:val});
     if (val == 'Alphabetical') {
     this.state.dataSource.sort((a, b) => a.description.localeCompare(b.description));
     } else {
       this.state.dataSource.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
     }
   }

  fetchData() {
    fetch(Url+'/render')
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson = responseJson.map(item => {
        item.isSelect = false;
        item.selectedClass = styles.button;
        return item;
      });
      const responseJson2 = responseJson.filter(function(item){
        return item.isInStorage == 'Yes' && item.owner == Auth.user.attributes.email
      });
      this.setState({dataSource: responseJson2});
      this.setState({count: responseJson2.length});
      if (this.state.filter == 'Alphabetical') {
      this.state.dataSource.sort((a, b) => a.description.localeCompare(b.description));
      }
    })
    .then(() => {
     this.setState({refreshing: false});
    })
    .catch((error) => {
      console.log(error)
    })
  }

  getMax(){
    Auth.currentUserInfo().then((userInfo) => {
      const { attributes = {} } = userInfo;
      if (attributes['custom:size']=='2x2'){
        this.setState({max:'/20'});
      } else if (attributes['custom:size']=='2x4'){
        this.setState({max:'/50'});
      } else if (attributes['custom:size']=='5x5'){
        this.setState({max:'/75'});
      }
    })
  }

  componentDidMount() {
    this.fetchData();
    this.getMax();
  }

  render() {
    return (
        <View style={styles.container}>
            <DropDownPicker
              items={[
                    {label: 'Date Added (Newest)', value: 'Newest'},
                    {label: 'A -> Z', value: 'Alphabetical'}
              ]}
              placeholder={"Sort By"}
              arrowSize={10}
              itemStyle={{justifyContent: 'flex-start'}}
              containerStyle={{marginLeft: 15, marginBottom: 5, height: 35, width: 110}}
              onChangeItem={item => {this.onSort(item.value)}}
            />
            <FlatList
              numColumns={2}
              data={this.state.dataSource}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              extraData={this.state}
              refreshControl={
                <RefreshControl
                   refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                    tintColor = 'white'
                />
              }
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#261136',
  },
  sectionHeader: {
    color: '#AAB5E0',
    fontSize: 25,
    marginBottom: 25,
    marginLeft: 15
  },
  menuFilter: {
    color: 'white',
    fontSize: 10,
    marginLeft: 15,
  },
  item: {
    margin: 15,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
  },
  button: {
    backgroundColor: '#7B1FA2',
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 3,
  },
  selected: {
    backgroundColor: 'green',
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 3,
  },
})
