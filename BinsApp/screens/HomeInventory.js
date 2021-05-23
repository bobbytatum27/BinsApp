import React, { Component } from 'react';
import { ScrollView, View, Text, Button, TouchableOpacity, StyleSheet, FlatList, Image, RefreshControl, Alert } from 'react-native';
import {UserInfoContext} from '../components/Providers/UserInfoProvider.js'
import {Auth} from 'aws-amplify';
import DropDownPicker from 'react-native-dropdown-picker';

import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'
import {Url} from '../src/components/url.js';
import {S3url} from '../src/components/s3url.js';

export default class HomeInventory extends Component {
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
              <Text allowFontScaling={false}>ID #{data.item.id.slice(0,12)}</Text>
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

  fetchData() {
    this.context.fetchData().then(() => {
      this.setState({dataSource: this.context.dataSourceHome,
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
    marginBottom: 10,
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
  button2: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    margin: 15,
    borderRadius: 3,
 },
})


//Button for New Items

/*
<TouchableOpacity style = {styles.button2}
                  onPress = {() => this.props.navigation.navigate('NewItemScreen')}>
  <Text allowFontScaling={false} style={{color: 'white', fontSize: 16}}>Click Here to Create New Bin</Text>
</TouchableOpacity>
*/


//Button for Next Screen
/*
<LongButton title ="PICK UP SELECTED ITEMS FROM ME"
            onPress={() => {
              this.state.selected.length == 0 ? Alert.alert('Please Select Items') :
              this.props.navigation.navigate('ScheduleAppointmentScreen', {selected: this.state.selected, type: this.state.type, id: this.state.id})}}/>
*/
