import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'

export default class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSelected: '',
      timeSelected: '',
      address: '',
      type: '',
    }
  }

  componentDidMount(){
      const dateSelected = this.props.route.params?.dateSelected??'';
      const timeSelected = this.props.route.params?.timeSelected??'';
      const address = this.props.route.params?.address??'';
      const type = this.props.route.params?.type??'';
      this.setState({type});
      this.setState({dateSelected});
      this.setState({timeSelected});
      this.setState({address});
    }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.header}>Your Order Has Been Placed Successfully!</Text>
          <Textbox header='Date and Time'
                   body={this.state.dateSelected}
                   body2={this.state.timeSelected}/>
          <Textbox header='Address'
                   body={this.state.address}/>
          <Textbox header='Order Type'
                   body={this.state.type}/>
          <View>
            <LongButton title ="VIEW SCHEDULED ORDERS"
                        onPress={() => this.props.navigation.navigate('Orders')}/>
          </View>
          <View style = {{marginTop: -15}}>
            <LongButton title ="MAKE ANOTHER ORDER"
                        onPress={() => this.props.navigation.navigate('Home')}/>
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
  textAlign: 'center',
}

});
