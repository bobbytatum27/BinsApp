import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity, StyleSheet, FlatList, Image, RefreshControl, Alert } from 'react-native';
import {LoginContext} from '../components/LoginProvider.js'
import {Auth} from 'aws-amplify';
import DropDownPicker from 'react-native-dropdown-picker';

import Item from '../components/Item.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'
import {Url} from '../src/components/url.js';

export default class HomeInventory extends Component {
  static contextType = LoginContext;
  constructor() {
    super();
    this.state = {
      dataSource: [],
      selected: [],
      type: "Pickup",
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
        <TouchableOpacity
          style={styles.button, data.item.selectedClass}
          onPress={() => {this.selectItem(data); this.getSelected(this.state.dataSource);}}>
          <Image style={{width: 150, height: 150}}
                 source={{uri: data.item.photo}}/>
          <View>
          <Text>
            {data.item.description}
          </Text>
        </View>
      </TouchableOpacity>
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
    console.log(val, this.state.filter);
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
        return item.isInStorage == 'No' && item.owner == Auth.user.attributes.email
      });
      this.setState({dataSource: responseJson2});
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
        <Text style={styles.sectionHeader}>Items with You</Text>

        <TouchableOpacity style = {styles.button2}
                          onPress = {() => this.props.navigation.navigate('NewItemScreen')}>
          <Text style={{color: 'white', fontSize: 16}}>Click Here to Create New Bin</Text>
        </TouchableOpacity>
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
        <LongButton title ="PICK UP SELECTED ITEMS FROM ME"
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
    marginBottom: 10,
    marginLeft: 15
  },
  menuFilter: {
    color: 'white',
    fontSize: 10,
    marginLeft: 15,
  },
  button: {
    margin: 15,
    alignItems: 'center',
    height: 170,
    width: 152,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
  },
  selected: {
    margin: 15,
    alignItems: 'center',
    height: 174,
    width: 160,
    backgroundColor: 'white',
    borderColor: '#7B1FA2',
    borderWidth: 5
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    margin: 15,
    borderRadius: 3,
 },
})
