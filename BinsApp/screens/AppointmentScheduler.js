import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, ScrollView } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'

export default class AppointmentScheduler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={{padding: 25}}>
            <Text>Address Line 1</Text>
            <FormInputHandler />
            <Text>Address Line 2</Text>
            <FormInputHandler />
            <Text>City</Text>
            <FormInputHandler />
            <Text>State</Text>
            <FormInputHandler />
            <Text>Zip</Text>
            <FormInputHandler />
          </View>
          <View style={{padding: 25}}>
            <Text>Special Instructions: </Text>
            <FormInputHandler />
          </View>
          <Text>Please select a date</Text>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{width: 150, height: 150}}
              source={{uri: 'https://cdn.vertex42.com/calendars/2020/March-2020-calendar.png'}}
            />
          </View>
          <Text style={{paddingTop: 25}}>Please select a time</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center', borderColor: '#d6d7da'}}>
            <Button
              title="8-10"
              onPress={()=>Alert.alert('time noted!')}
              />
            <Button
              title="10-12"
              onPress={()=>Alert.alert('time noted!')}
            />
            <Button
              title="12-2"
              onPress={()=>Alert.alert('time noted!')}
            />
            <Button
              title="2-4"
              onPress={()=>Alert.alert('time noted!')}
            />
            <Button
              title="4-6"
              onPress={()=>Alert.alert('time noted!')}
            />
            <Button
              title="5-7"
              onPress={()=>Alert.alert('time noted!')}
            />
            <Button
              title="7-9"
              onPress={()=>Alert.alert('time noted!')}
            />
          </View>
          <Button
            title="Next"
            onPress={()=>this.props.navigation.navigate('BillingInfoScreen')}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
