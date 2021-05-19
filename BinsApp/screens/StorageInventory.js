import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity, FlatList, StyleSheet, Image, RefreshControl, Alert } from 'react-native';
import {LoginContext} from '../components/Providers/LoginProvider.js'
import {Auth} from 'aws-amplify';
import DropDownPicker from 'react-native-dropdown-picker';

import Item from '../components/Item.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'
import {Url} from '../src/components/url.js';
import {S3url} from '../src/components/s3url.js';

export default class StorageInventory extends Component {
  static contextType = LoginContext;
  constructor() {
    super();
    this.state = {
      dataSource: [],
      selected: [],
      type: "DELIVERY",
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
                 source={{uri: S3url + data.item.photo}}/>
          <View style={{padding: 10, flexDirection: 'column'}}>
            <Text allowFontScaling={false} style={{fontWeight: 'bold'}}>{data.item.description}</Text>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
              <Text allowFontScaling={false}>ID #{data.item.id}</Text>
              <TouchableOpacity style = {styles.button, data.item.selectedClass}
                                onPress={() => {this.selectItem(data); this.getSelected(this.state.dataSource);}}>
              {data.item.isSelect ? (<Text allowFontScaling={false} style={{color:'white'}}>Selected</Text> ) : (<Text allowFontScaling={false} style={{color:'white'}}>Select</Text> )}
              </TouchableOpacity>
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
            <LongButton title ="DELIVER SELECTED ITEMS TO ME"
                      onPress={() => {
                        this.state.selected.length == 0 ? Alert.alert('Please Select Items') :
                        this.props.navigation.navigate('ScheduleAppointmentScreen', {selected: this.state.selected, type: this.state.type, id: this.state.id})}}/>
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
