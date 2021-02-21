import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import { LoginContext } from '../components/LoginProvider.js';
import {Auth} from 'aws-amplify';
import { Ionicons } from '@expo/vector-icons';
import {Url} from '../src/components/url.js';

export default class ViewPlan extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      specialInstructions: '',
      selectedButton: '',
      percentageUsed: '',
      options: [{"size": "By Item", "description": "60x40x31.5cm", "price": "$7/month"},
                {"size": "2x2", "description": "16 cubic ft - Hall Closet", "price": "$79/month"},
                {"size": "2x4", "description": "32 cubic feet - Bedroom Closet", "price": "$99/month"},
                {"size": "5x5", "description": "100 cubic feet - Walk-in Closet", "price": "$134/month"},
                {"size": "5x10", "description": "200 cubic feet - Studio Apt.", "price": "$157/month"},
                {"size": "5x15", "description": "300 cubic feet - Small 1BR Apt.", "price": "$191/month"},
                {"size": "10x10", "description": "400 cubic feet - 1BR Apt.", "price": "$236/month"}]
    }
  }

  renderItem = data => {
    if (data.item.size == this.state.selectedButton) {
      return (
        <View style={styles.openButton}>
          <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.buttonHeader}>{data.item.size}</Text>
            <Text style={styles.buttonHeader}>{data.item.price}</Text>
          </View>
          <Text style={{color: '#FFF'}}>{data.item.description}</Text>
        </View>
      )
    }
  }

  fetchData(){
    fetch(Url+'/%used')
    .then((response) => response.json())
    .then((responseJson) => {
      const responseJson2 = responseJson.filter(function(item){
        return item.email == Auth.user.attributes.email
      });
      this.setState({percentageUsed: responseJson2[0].percentageUsed});
    })
    .catch((error) => {
      console.log(error)
    })
  }

  componentDidMount(){
    Auth.currentUserInfo().then((userInfo) => {
      const { attributes = {} } = userInfo;
      this.setState({name:attributes['name']});
      this.setState({email:attributes['email']});
      this.setState({phone:attributes['phone_number']});
      this.setState({address:attributes['address']});
      this.setState({specialInstructions:attributes['custom:specialInstructions']});
      this.setState({selectedButton:attributes['custom:size']});
    })
    this.fetchData();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.descriptionText}>Your Facility</Text>
            <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 10, borderRadius: 10, margin: 15}}>
              <View style={{flex: 1}}>
                <Image style={{width: 50, height: 50}} source={require('../photos/csimini.png') }/>
              </View>
              <View style={{flex: 5, backgroundColor: 'white', height: 50, paddingLeft: 10}}>
                <Text style={{fontSize: 20}}>CSI Mini Storage</Text>
                <Text>855 Parr Boulevard, Richmond, CA 94801</Text>
              </View>
            </View>
          <Text style={styles.descriptionText}>Your Plan - {this.state.percentageUsed} Used</Text>
          <FlatList
            data={this.state.options}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
          />
          <View style={{margin: 10}}/>
          <Text style={styles.sectionHeaderWhite}>Cancel Plan</Text>
          <View style={{margin: 2}}/>
          <Text style={styles.sectionHeader}>To cancel your plan, please email us at: contact@bins-storage.com</Text>
        </View>
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
    paddingLeft: 15,
    color: 'white',
  },
  sectionHeader: {
    color: '#AAB5E0',
    fontSize: 15,
    marginLeft: 15,
  },
  sectionHeaderWhite: {
    color: '#FFF',
    fontSize: 15,
    marginLeft: 15
  },
  openButton: {
    backgroundColor: "#7B1FA2",
    borderRadius: 5,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    padding: 5,
    borderColor: '#FFF'
  },
  selectedButton: {
    backgroundColor: "green",
    borderRadius: 5,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    padding: 5,
    borderColor: '#FFF'
  },
  cancelButton: {
    backgroundColor: "tomato",
    borderRadius: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 25,
    padding: 10,
    borderColor: '#FFF'
  },
  buttonHeader: {
    color: '#FFF',
    fontSize: 18,
  },
});

//Button to go to Edit Plan

/*
<TouchableOpacity style = {styles.cancelButton} onPress = {() => this.props.navigation.navigate('EditPlan')}>
  <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>Manage Plan</Text>
</TouchableOpacity>
*/
