import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Button, TouchableOpacity, Image, Alert } from 'react-native';
import {Auth} from 'aws-amplify';
import * as ImagePicker from 'expo-image-picker';

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
      image: null,
      };
  }

  onSubmit() {
    fetch('http://192.168.1.247:5000/inventory',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(this.state)
  })}

  _pickImage = async () => {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }

        console.log(result.uri);
      } catch (E) {
        console.log(E);
      }
    };

  render() {
    let { image } = this.state;

    return (
        <View style={styles.container}>
          <Text style={styles.sectionHeader}>New Item</Text>
          <TouchableOpacity style = {styles.button2}
                            onPress={this._pickImage}>

                          <Text style={{color: '#000', fontSize: 16}}>Add Photo</Text>
          </TouchableOpacity>
          <Text style ={styles.descriptionText}>Name of Bin</Text>
          <FormInputHandler defaultText='Ex: Winter Clothes, Camping Gear'
                            defaultTextColor='#8B8B8B'
                            style={styles.userInfoText}
                            onChangeText={(text) => this.setState({itemName: text})}/>
          <View style = {{alignItems: 'center'}}>
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </View>
          <LongButton title ="SAVE"
                  onPress={()=>{
                    if (this.state.itemName == '' || this.state.image == null) {
                      Alert.alert('Please Complete All Fields')
                    } else {
                    this.onSubmit(); this.props.navigation.navigate('HomeInventoryScreen')}}}/>
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
    marginTop: 10,
    color: 'white',
  },
  sectionHeader: {
      color: '#AAB5E0',
      fontSize: 25,
      marginLeft: 15,
      marginBottom: 10,
    },
  button2: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    margin: 15,
    borderRadius: 5,
  },
  });
