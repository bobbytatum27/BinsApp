import React, { Component, useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, TextInput, Button
} from 'react-native'

import { API, graphqlOperation } from 'aws-amplify'
import { getCustomer } from '../src/graphql/queries.js'

const initialState = { name: '', email: '', phone: '', address: 'addy', specialInstructions: 'none', size: '5x5', building: 'apt', parking: 'front', licenseNumber: '123', licenseState: 'CA'}

export default class GraphQLTest extends Component{

  async componentDidMount() {
      const customerData = await API.graphql(graphqlOperation(getCustomer, { id: '541e0548-2808-4d9c-870b-06fe4d0fe912' }))
      console.log(customerData)
  }
  render() {
  return (
    <View style={styles.container}>
      <Text>dd</Text>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
  todoName: { fontSize: 18 }
})

