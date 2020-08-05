import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Button, TouchableOpacity } from 'react-native';
import {Auth} from 'aws-amplify';

import Item from '../components/Item.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'
import FormInputHandler from '../components/FormInputHandler.js'
import {LoginContext} from '../components/LoginProvider.js'

export default class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      email: Auth.user.attributes.email,
      };
  }

  onSubmit() {
    fetch('http://192.168.1.247:5000//inventory',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(this.state)
  })}

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionHeader}>New Item</Text>
              <Text style ={styles.descriptionText}>Name of Bin</Text>
              <FormInputHandler
                defaultText='Ex: Winter Clothes, Camping Gear'
                defaultTextColor='#8B8B8B'
                style={styles.userInfoText}
                onChangeText={(text) => this.setState({itemName: text})}/>
              <Button title ="Save"
                      onPress={()=>{this.onSubmit(); this.props.navigation.navigate('HomeInventoryScreen')}}/>

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
  sectionHeader: {
      color: '#AAB5E0',
      fontSize: 25,
      marginLeft: 15,
      marginBottom: 25,
    },

  });
