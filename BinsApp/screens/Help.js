import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default class Help extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <ScrollView>
          <Text style = {styles.sectionHeader}>Help/FAQs</Text>
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
      marginBottom: 10,
      marginLeft: 15
    },
    menuFilter: {
      color: 'white',
      fontSize: 10,
      marginLeft: 15,
    },
  }
)
