import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import LongButton from '../components/LongButton.js'

export default class InitialAppointment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name:'',
      email:'',
      password:'',
      phone: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      specialInstructions: '',
      dateSelected: {},
      timeSelected: '',
      selectedButton: null,
    }
    this.selectionOnPress = this.selectionOnPress.bind(this)
  }

selectionOnPress(userType) {
  this.setState({selectedButton: userType})
}


  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{marginBottom:25}}>
            <Text style ={styles.descriptionText}>Address Line 1</Text>
            <FormInputHandler
              defaultText='Address Line 1'
              defaultTextColor='#8B8B8B'
              style={styles.userInfoText}
              onChangeText={(text) => this.setState({addressLine1: text})}
            />
            <Text style ={styles.descriptionText}>Address Line 2</Text>
            <FormInputHandler
              defaultText='Address Line 2'
              defaultTextColor='#8B8B8B'
              style={styles.userInfoText}
              onChangeText={(text) => this.setState({addressLine2: text})}
            />
            <Text style ={styles.descriptionText}>City</Text>
            <FormInputHandler
              defaultText='City'
              defaultTextColor='#8B8B8B'
              style={styles.userInfoText}
              onChangeText={(text) => this.setState({city: text})}
            />
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
              <View style={{flex:1}}>
                <Text style ={styles.descriptionText}>State</Text>
                <FormInputHandler
                  defaultText='State'
                  defaultTextColor='#8B8B8B'
                  style={styles.userInfoText}
                  onChangeText={(text) => this.setState({state: text})}
                />
              </View>
              <View style={{flex:1}}>
                <Text style ={styles.descriptionText}>Zip</Text>
                <FormInputHandler
                  defaultText='Zip Code'
                  style={styles.userInfoText}
                  defaultTextColor='#8B8B8B'
                  onChangeText={(text) => this.setState({zip: text})}
                />
              </View>
            </View>
            <Text style ={styles.descriptionText}>Special Instructions</Text>
            <FormInputHandler
                defaultText='Ex: Gate code, apartment number'
                style={styles.userInfoText}
                defaultTextColor='#8B8B8B'
                onChangeText={(text) => this.setState({specialInstructions: text})}
            />
            <Text style ={styles.descriptionText}>Please Select a Date</Text>
            <Calendar
              style={{margin:15}}
              onDayPress={(day) => {this.setState({dateSelected:{[day.dateString]:{selected: true, selectedColor: '#466A8F'}}})}}
              markedDates={this.state.dateSelected}/>
            <Text style={styles.descriptionText}>Please select a time</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', borderColor: '#d6d7da', flexWrap: 'wrap', marginTop: 25}}>
              <TouchableOpacity
                style = {{margin: 5, borderRadius: 10, padding: 5, backgroundColor: '#7B1FA2', borderColor: '#FFF', borderWidth: this.state.selectedButton === '8am-10am' ? 2 : 0}}
                onPress={() => this.selectionOnPress("8am-10am")}
                onPressIn={() => this.setState({timeSelected: '8am'})}>
              <Text style={styles.switchButtonsText}>8am-10am</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style = {{margin: 5, borderRadius: 10, padding: 5, backgroundColor: '#7B1FA2', borderColor: '#FFF', borderWidth: this.state.selectedButton === '10am-12pm' ? 2 : 0}}
                onPress={() => this.selectionOnPress("10am-12pm")}
                onPressIn={() => this.setState({timeSelected: '10am'})}>
              <Text style={styles.switchButtonsText}>10am-12pm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style = {{margin: 5, borderRadius: 10, padding: 5, backgroundColor: '#7B1FA2', borderColor: '#FFF', borderWidth: this.state.selectedButton === '12pm-2pm' ? 2 : 0}}
                onPress={() => this.selectionOnPress("12pm-2pm")}
                onPressIn={() => this.setState({timeSelected: '12pm'})}>
              <Text style={styles.switchButtonsText}>12pm-2pm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style = {{margin: 5, borderRadius: 10, padding: 5, backgroundColor: '#7B1FA2', borderColor: '#FFF', borderWidth: this.state.selectedButton === '2pm-4pm' ? 2 : 0}}
                onPress={() => this.selectionOnPress("2pm-4pm")}
                onPressIn={() => this.setState({timeSelected: '2pm'})}>
                <Text style={styles.switchButtonsText}>2pm-4pm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style = {{margin: 5, borderRadius: 10, padding: 5, backgroundColor: '#7B1FA2', borderColor: '#FFF', borderWidth: this.state.selectedButton === '4pm-6pm' ? 2 : 0}}
                onPress={() => this.selectionOnPress("4pm-6pm")}
                onPressIn={() => this.setState({timeSelected: '4pm'})}>
              <Text style={styles.switchButtonsText}>4pm-6pm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style = {{margin: 5, borderRadius: 10, padding: 5, backgroundColor: '#7B1FA2', borderColor: '#FFF', borderWidth: this.state.selectedButton === '6pm-8pm' ? 2 : 0}}
                onPress={() => this.selectionOnPress("6pm-8pm")}
                onPressIn={() => this.setState({timeSelected: '6pm'})}>
              <Text style={styles.switchButtonsText}>6pm-8pm</Text>
              </TouchableOpacity>
            </View>
          <LongButton
            title="NEXT"
            onPress={()=>this.props.navigation.navigate('BillingInfoScreen', {name:this.props.route.params.name,
                                                                              email:this.props.route.params.email,
                                                                              password:this.props.route.params.password,
                                                                              phone:this.props.route.params.phone,
                                                                              addressLine1:this.state.addressLine1,
                                                                              addressLine2:this.state.addressLine2,
                                                                              city:this.state.city,
                                                                              state:this.state.state,
                                                                              zip:this.state.zip,
                                                                              specialInstructions:this.state.specialInstructions,
                                                                              dateSelected: this.state.dateSelected,
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
