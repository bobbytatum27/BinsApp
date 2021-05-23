import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import LongButton from '../components/LongButton.js'
import { UserInfoContext } from '../components/Providers/UserInfoProvider.js';
import {Auth} from 'aws-amplify';
import { Ionicons } from '@expo/vector-icons';
import {Url} from '../src/components/url.js';

export default class EditPhone extends React.Component {
  static contextType = UserInfoContext;

  constructor(props) {
    super(props);
    this.state = {
      phone: '',
    }
  }

  onSubmit(){
    this.context.updateUserPhone(this.context.email, this.state.phone);
  }
      
  componentDidMount(){
      this.setState({phone: this.context.phone})
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:5}}>
          <Text allowFontScaling={false} style ={styles.descriptionText}>Phone</Text>
          <FormInputHandler
            defaultValue={this.state.phone}
            defaultTextColor='#8B8B8B'
            style={styles.userInfoText}
            onChangeText={(val)=>this.setState({phone:val})}
          />
        </View>
        <View style={{flex:1, justifyContent: 'flex-end'}}>
          <LongButton
            title="SAVE INFO"
            onPress={()=>{this.onSubmit(); Alert.alert("Your Information Has Been Saved"); this.props.navigation.navigate('Menu')}}
          />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#261136',
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
    paddingLeft: 15,
    color: 'white',
  },
  sectionHeader: {
    color: '#AAB5E0',
    fontSize: 25,
    marginBottom: 25,
    marginLeft: 15
  },
});
