import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity, FlatList, StyleSheet, Image, RefreshControl, Alert } from 'react-native';
import {UserInfoContext} from '../components/Providers/UserInfoProvider.js'
import {Auth} from 'aws-amplify';
import DropDownPicker from 'react-native-dropdown-picker';

import Item from '../components/Item.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'
import {Url} from '../src/components/url.js';
import {S3url} from '../src/components/s3url.js';

export default class ViewStorageInventory extends Component {
  static contextType = UserInfoContext;
  constructor() {
    super();
    this.state = {
      dataSource: [],
      refreshing: false,
      filter: '',
      id: '',
    }
  }

  renderItem = data => {
      return (
        <View style={styles.item}>
          <Image style={{width: 150, height: 150}}
                 source={{uri: S3url + data.item.photo}}/>
          <View style={{padding: 10, flexDirection: 'column'}}>
            <Text allowFontScaling={false} style={{fontWeight: 'bold'}}>{data.item.description.slice(0,12)}</Text>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text allowFontScaling={false}>ID #{data.item.id.slice(0,12)}</Text>
            </View>
        </View>
      </View>
    )
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

   fetchData(){
    this.context.fetchData().then(() => {
      this.setState({dataSource: this.context.dataSourceStorage,
                     isLoading:false,
                     refreshing: false
                    })
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

  componentDidMount() {
    this.fetchData();
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
