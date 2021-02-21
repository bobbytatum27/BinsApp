import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import LongButton from '../components/LongButton.js'

export default class InitialTerms extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <ScrollView>
          <Text style = {styles.sectionHeader}>Terms and Conditions</Text>
          <LongButton
            title="I HAVE READ AND AGREE TO THE TERMS AND CONDITIONS"
            onPress={()=>{
              this.props.navigation.navigate('InitialConfirmationScreen', {dateSelected: this.props.route.params.dateSelected,
                                                                    timeSelected: this.props.route.params.timeSelected,
                                                                    address: this.props.route.params.address,
                                                                    type: this.props.route.params.type})
              }}/>
        </ScrollView>
      </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 25,
      backgroundColor: '#261136',
    },
    sectionHeader: {
      color: '#AAB5E0',
      fontSize: 25,
      textAlign: 'center',
      marginTop: 40,
      marginBottom: 25,
    },
    text: {
      color: '#FFF',
      fontSize: 15,
      marginLeft: 15,
      marginTop: 5,
      marginRight: 15,
    },
    header: {
      color: '#AAB5E0',
      fontSize: 20,
      marginLeft: 15,
      marginTop: 15,
      marginRight: 15,
    }
  }
)
