import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import Textbox from '../components/Textbox.js'
import LongButton from '../components/LongButton.js'
//import { CreditCardInput } from 'react-native-credit-card-input'
import { ScrollView } from 'react-native-gesture-handler';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {Url} from '../src/components/url.js';
import moment from "moment";
import * as queries from '../src/graphql/queries';
import { createOrder } from '../src/graphql/mutations';

import { LoginContext } from '../components/Providers/LoginProvider.js';

export default class BillingInfo extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      dateSelected: '',
      timeSelected: '',
      address: '',
      email: '',
      facilityID: '',
      type: 'PICKUP',
      selected: '',
      size: '',
    }
  }

/*
  onSubmit() {
    fetch(Url+'/orders',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(this.state)
  })
}


      Auth.currentUserInfo().then((userInfo) => {
        const { attributes = {} } = userInfo;
        this.setState({address:attributes['address']});
        this.setState({email:attributes['email']});
        this.setState({phone:attributes['phone_number']});
        this.setState({size:attributes['custom:size']});
      })
*/

  async onSubmit() {
    try {
      const order = {
        address: this.state.address,
        date: this.state.dateSelected,
        facilityID: this.state.facilityID,
        tenantID: this.state.email,
        jobType: this.state.type,
        status: "INCOMPLETE",
        time: this.state.timeSelected
      }
      await API.graphql(graphqlOperation(createOrder, { input: order}));
      console.log('success!');
    }
    catch (err) {
      console.log('error creating:', err);
    }
  }

  async fetchData() {
    const currentUserInfo = await Auth.currentUserInfo();
    const userEmail = currentUserInfo.attributes['email'];
    const userSize = currentUserInfo.attributes['custom:size'];
    const tenantInfo = await API.graphql({query: queries.getTenant, variables: {id: userEmail}});
    const tenantFacilityID = tenantInfo.data.getTenant.facilityID
    const userAddressCity = tenantInfo.data.getTenant.address[0].city
    const userAddressState = tenantInfo.data.getTenant.address[0].state
    const userAddressAddressLine1 = tenantInfo.data.getTenant.address[0].addressLine1
    const userAddressAddressLine2 = tenantInfo.data.getTenant.address[0].addressLine2
    const userAddressZip = tenantInfo.data.getTenant.address[0].zip
    this.setState({email: userEmail, facilityID: tenantFacilityID, size: userSize, address: userAddressAddressLine1 + ", " + userAddressCity + " " + userAddressState + " " + userAddressZip})
  }

  componentDidMount(){
      const dateSelected = this.props.route.params?.dateSelected??'';
      const timeSelected = this.props.route.params?.timeSelected??'';
      const selectedItems = this.props.route.params?.selected??'';
      this.setState({dateSelected: dateSelected, timeSelected: timeSelected, selected: selectedItems.toString()});
      this.fetchData();
    }

  render() {
    return (
      <View style={styles.container}>
        <Textbox header='Date'
                 body={moment(this.state.dateSelected).format('MMMM DD, YYYY')}/>
        <Textbox header='Time'
                 body={this.state.timeSelected}/>
        <Textbox header='Address'
                 body={this.state.address}/>
        <Textbox header='Option'
                 body={this.state.size}/>
        <Textbox header='Items'
                body={this.state.selected}/>
        <View style = {{padding: 25}}>
          <LongButton
            title="I HAVE READ AND AGREE TO THE TERMS AND CONDITIONS"
            onPress={()=>{
              this.onSubmit();
              this.props.navigation.navigate('InitialConfirmationScreen', {dateSelected: this.state.dateSelected,
                                                                    timeSelected: this.state.timeSelected,
                                                                    address: this.state.address,
                                                                    type: this.state.type})
              }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  creditCardLabels: {
    color: 'white',
  },
  creditCardInputView: {
    borderColor: '#4826A0',
    borderWidth: 1,
    margin: 15,
    paddingLeft: 5,
    paddingTop: 5
  }

});

//Credit Card Input
/*
<CreditCardInput
  onChange={this._onChange}
  labelStyle={styles.creditCardLabels}
  inputContainerStyle={styles.creditCardInputView}
  inputStyle={{color: 'white'}}
  requiresName={true}
  autoFocus={false}
/>
*/
