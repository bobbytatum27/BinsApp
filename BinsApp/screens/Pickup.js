import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Counter from "react-native-counters";

export default class Pickup extends Component {

  constructor() {
    super();
    this.state = {
      type: "Pickup",
      checked: false,
      selectedButton: '',
      selected: [],
      deskCount: 0,
      couchCount: 0,
      bedCount: 0,
      tableCount: 0,
      otherCount: 0,
    }
  }

  changeDesk(number) {
      this.setState({deskCount: number})
    }

  changeCouch(number) {
      this.setState({couchCount: number})
    }

  changeBed(number) {
      this.setState({bedCount: number})
    }

  changeTable(number) {
        this.setState({tableCount: number})
    }

  getSelected() {
    var list = []
    if (this.state.deskCount > 0)
    {
      list.push("Desks("+this.state.deskCount+")")
    }
    if (this.state.couchCount > 0)
    {
      list.push("Couches("+this.state.couchCount+")")
    }
    if (this.state.bedCount > 0)
    {
      list.push("Beds("+this.state.bedCount+")")
    }
    if (this.state.tableCount > 0)
    {
      list.push("Tables("+this.state.tableCount+")")
    }
    this.props.navigation.navigate('ScheduleAppointmentScreen', {type: this.state.type, selected: list})
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>Do you plan on storing miscellaneous items? Ex: clothes, kitchenware, etc.</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', borderColor: '#d6d7da', flexWrap: 'wrap', marginTop: 25, margin: 25, marginLeft: 5, marginRight:5}}>
        <TouchableOpacity
          style = {{margin: 5, borderRadius: 10, padding: 10, backgroundColor: '#7B1FA2', borderColor: '#FFF', borderWidth: this.state.selectedButton === 'Yes' ? 2 : 0}}
          onPress={() => this.setState({selectedButton: 'Yes'})}>
        <Text style={styles.text}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{margin: 5, borderRadius: 10, padding: 10, backgroundColor: '#7B1FA2', borderColor: '#FFF', borderWidth: this.state.selectedButton === 'No' ? 2 : 0}}
          onPress={() => this.setState({selectedButton: 'No'})}>
        <Text style={styles.text}>No</Text>
        </TouchableOpacity>
      </View>
          <Text style={styles.header}>How many of these items are you storing?</Text>
          <View style={styles.row}>
            <Text style={styles.text}>Desks</Text>
            <Counter start={0} onChange={this.changeDesk.bind(this)}/>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Couches</Text>
            <Counter start={0} onChange={this.changeCouch.bind(this)}/>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Beds</Text>
            <Counter start={0} onChange={this.changeBed.bind(this)}/>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Tables</Text>
            <Counter start={0} onChange={this.changeTable.bind(this)}/>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Other Large Furniture</Text>
            <Counter start={0}/>
          </View>
        <TouchableOpacity style={styles.button3} onPress={() => this.getSelected()}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
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
    button3: {
     alignItems: 'center',
     backgroundColor: '#7B1FA2',
     padding: 10,
     margin: 15,
     borderRadius: 5
   },
   header: {
     color: '#FFF',
     fontSize: 20,
     margin: 10,
     fontWeight: 'bold'
   },
   text: {
     color: '#FFF',
     fontSize: 20,
   },
   row: {
     flexDirection:'row',
     justifyContent: 'space-between',
     alignItems:'center',
     margin: 10,
   },
  })
