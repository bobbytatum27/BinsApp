import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import Textbox from '../components/Textbox.js'

export default class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSelected: '',
      timeSelected: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionHeader}>Upcoming Orders</Text>
        <Textbox header='Date and Time'
                 body='Monday, January 1, 2020'
                 body2='8am - 10am'/>
        <Textbox header='Address'
                 body='123 New York Avenue'
                 body2='Los Angeles, CA 92001'/>
        <Textbox header='Order Type'
                 body='Pickup'/>
        <View style={{flexDirection: 'row',
                      backgroundColor: 'white',
                      padding: 10,
                      marginLeft: 15,
                      marginRight: 15,
                      marginBottom: 1,
                    }}>
          <View>
          <Text style={{fontSize:12}}>Order Type</Text>
          <Text style={{fontSize:25}}>Pickup</Text>
          </View>
          <View>
          <Button title='VIEW'/>
          </View>
        </View>
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

  });
