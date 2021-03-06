import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import LongButton from '../components/LongButton.js'
import {Auth} from 'aws-amplify';
import moment from 'moment';

export default class InitialAppointment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateSelected: {},
      timeSelected: '',
      selectedButton: null,
      selected: [],
    }
    this.selectionOnPress = this.selectionOnPress.bind(this)
  }

  selectionOnPress(userType) {
    this.setState({selectedButton: userType})
  }

  componentDidMount(){
    Auth.signIn({
        username: this.props.route.params?.email??'',
        password: this.props.route.params?.password??'',
    })
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
          <Text allowFontScaling={false} style={styles.descriptionText}>Please select a time</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', borderColor: '#d6d7da', marginTop: 25}}>
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
          <LongButton
            title="NEXT"
            onPress={()=>
              Object.keys(this.state.dateSelected).length == 0 ? Alert.alert('Please Select Date') : this.state.timeSelected == '' ? Alert.alert('Please Select Time') :
              this.props.navigation.navigate('InitialPickup', {dateSelected: Object.keys(this.state.dateSelected)[0],
                                                                   timeSelected: this.state.timeSelected})}
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
  switchButtonsText:{
    fontSize: 20,
    color: '#FFF'
  },
  timeButton:{
    margin: 10,
  },

  });
