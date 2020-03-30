import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, FlatList, Button, Alert } from 'react-native';
import FormInputHandler from '../components/FormInputHandler.js'
import StorageCompanyCard from '../components/StorageCompanyCard'

export default class SelectFacility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {priceRangeVal: 50};
  }

  UnitSizeSeparator = () => {
    return(
      <View style={{padding: 5}}>
      </View>
    )
  }

  render() {
    return (
      <View>
        <Text>Enter a storage facility below:</Text>
        <View style={{padding: 25}}>
          <FormInputHandler/>
        </View>
        <View style={{flexDirection: 'row', paddingLeft: 25, paddingBottom: 10}}>
            <FlatList
              data={[
                {key: '5x5'},
                {key: '5x10'},
                {key: '10x10'},
                {key: '10x15'},
                {key: '15x15'},
                {key: '10x20'},
              ]}
              horizontal={true}
              renderItem={({item}) => <Text>{item.key}</Text>}
              ItemSeparatorComponent={this.UnitSizeSeparator}
            />
        </View>
        <View style={{paddingLeft: 25}}>
          <Text>Price: (I had a picker here but it didn't work, prob gonna re-add)</Text>
          <View style={{flexDirection:'row'}}>
          <Button
            title="$5"
            color='blue'
            onPress={()=>Alert.alert('$5 pressed')}
          />
          <Button
            title="$5"
            color='blue'
            onPress={()=>Alert.alert('$5 pressed')}
          />
          </View>

          <Text>Filter Option goes here </Text>
          <Text>FlatList of Storage Cards</Text>
          <StorageCompanyCard companyName="CubeSmart" />
          <StorageCompanyCard companyName="Extra Space Storage" />
          <StorageCompanyCard companyName="Public Storage" />
          <Text>Map at the bottom </Text>
          <Button
            title='adding an onpress to storage cards (press here for now)'
            onPress={()=>this.props.navigation.navigate('AccountInfoScreen')}
          />
        </View>
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
