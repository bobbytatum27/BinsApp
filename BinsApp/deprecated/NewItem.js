import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Button, TouchableOpacity, Image, Alert } from 'react-native';
import {Auth} from 'aws-amplify';
import * as ImagePicker from 'expo-image-picker';

import Item from '../components/Item.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'
import FormInputHandler from '../components/FormInputHandler.js'
import {LoginContext} from '../components/Providers/LoginProvider.js'
import {Url} from '../src/components/url.js';

export default class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      email: '',
      image: null,
      };
  }

  onSubmit() {
    fetch(Url+'/inventory',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(this.state)
  })}

  _pickImage = async () => {
      try {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      } catch (E) {
        console.log(E);
      }
    };

  render() {
    let { image } = this.state;

    return (
        <View style={styles.container}>
          <View>
          <Text allowFontScaling={false} style ={styles.descriptionText}>Email</Text>
          <FormInputHandler style={styles.userInfoText}
                            onChangeText={(text) => this.setState({email: text})}/>
          <Text allowFontScaling={false} style ={styles.descriptionText}>Name of Bin</Text>
          <FormInputHandler defaultText='Ex: Winter Clothes, Camping Gear'
                            defaultTextColor='#8B8B8B'
                            style={styles.userInfoText}
                            onChangeText={(text) => this.setState({itemName: text})}/>
                            <TouchableOpacity style = {styles.button2}
                                              onPress={this._pickImage}>

                                            <Text allowFontScaling={false} style={{color: '#000', fontSize: 16}}>Add Photo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.button2}
                                              onPress={this._pickImage}>

                                            <Text allowFontScaling={false} style={{color: '#000', fontSize: 16}}>Scan Code</Text>
                            </TouchableOpacity>
          <View style = {{alignItems: 'center'}}>
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </View>
          <LongButton title ="SAVE"
                  onPress={()=>{
                    if (this.state.itemName == '' || this.state.image == null) {
                      Alert.alert('Please Complete All Fields')
                    } else {
                    this.onSubmit();
                    Alert.alert('Item Saved')
                    }}}/>
          </View>
          <View style={{marginBottom: 25}}>
            <LongButton title ="COMPLETE"
                        onPress={() => this.props.navigation.navigate('Landing')}/>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261136',
    padding: 25,
    justifyContent: 'space-between'
  },
  userInfoText: {
    borderColor: '#4826A0',
    borderWidth: 1,
    textAlign: 'center',
    color: 'white',
    margin: 15,
    padding: 15,
    borderRadius: 5,
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
