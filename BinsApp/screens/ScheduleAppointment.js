import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import LongButton from '../components/LongButton.js'
import moment from 'moment';
import {Auth} from 'aws-amplify';

export default class ScheduleAppointment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateSelected: {},
      timeSelected: '',
      selectedButton: null,
      type: '',
      id: '',
      address: '',
    }
    this.selectionOnPress = this.selectionOnPress.bind(this)
  }

  selectionOnPress(userType) {
  this.setState({selectedButton: userType})
  }

  fetchData(){
    Auth.currentUserInfo().then((userInfo) => {
      const { attributes = {} } = userInfo;
      this.setState({address:attributes['address']});
    })
  }

  componentDidMount(){
    this.fetchData();
  }

  render() {

    const today = moment().format("YYYY-MM-DD");

    return (
      <View style={styles.container}>
        <ScrollView style={{marginBottom:25}}>
            <Text allowFontScaling={false} style ={styles.descriptionText}>Please Select a Date</Text>
            <Calendar
              style={{margin:15}}
              minDate={today}
              onDayPress={(day) => {this.setState({dateSelected:{[day.dateString]:{selected: true, selectedColor: '#466A8F'}}})}}
              markedDates={this.state.dateSelected}/>
            <Text allowFontScaling={false} style={styles.descriptionText}>Please Select a Time</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', borderColor: '#d6d7da', flexWrap: 'wrap', marginTop: 25, margin: 25, marginLeft: 5, marginRight:5}}>
              <TouchableOpacity
                style = {{margin: 5, borderRadius: 10, padding: 5, backgroundColor: '#7B1FA2', borderColor: '#FFF', borderWidth: this.state.selectedButton === '9:00am' ? 2 : 0}}
                onPress={() => this.selectionOnPress("9:00am")}
                onPressIn={() => this.setState({timeSelected: '9:00am'})}>
              <Text allowFontScaling={false} style={styles.switchButtonsText}>9:00am</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style = {{margin: 5, borderRadius: 10, padding: 5, backgroundColor: '#7B1FA2', borderColor: '#FFF', borderWidth: this.state.selectedButton === '1:00pm' ? 2 : 0}}
                onPress={() => this.selectionOnPress("1:00pm")}
                onPressIn={() => this.setState({timeSelected: '1:00pm'})}>
              <Text allowFontScaling={false} style={styles.switchButtonsText}>1:00pm</Text>
              </TouchableOpacity>
            </View>
            <Text allowFontScaling={false} style={styles.descriptionText}>Address</Text>
            <TouchableOpacity style={styles.textbox}
                              onPress={() => this.props.navigation.navigate('EditAddress')}>
              <Text allowFontScaling={false} style={styles.header}>{this.state.address}</Text>
              <Text allowFontScaling={false} style={styles.header}>{'>'}</Text>
            </TouchableOpacity>
          <LongButton
            title="NEXT"
            onPress={()=>
              Object.keys(this.state.dateSelected).length == 0 ? Alert.alert('Please Select Date') : this.state.timeSelected == '' ? Alert.alert('Please Select Time') :
              this.props.navigation.navigate('ReviewScreen', {dateSelected: Object.keys(this.state.dateSelected)[0],
                                                                         timeSelected: this.state.timeSelected,
                                                                         selected: this.props.route.params?.selected??'',
                                                                         type: this.props.route.params?.type??'',
                                                                         id: this.props.route.params?.id??''})}
          />
        </ScrollView>
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
  descriptionText:{
    marginBottom: -10,
    marginLeft: 15,
    color: 'white',
  },
  switchButtonsText:{
    fontSize: 20,
    color: '#FFF'
  },
  timeButton:{
    margin: 10
  },
  textbox: {
    flexDirection: 'row',
    backgroundColor: '#7B1FA2',
    padding: 10,
    justifyContent: 'space-between',
    margin: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  header: {
    fontSize: 20,
    color: '#FFF'
  },
  });
