import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

//deprecate in favor of Landing

export default class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Bins</Text>
        <Text>We help pick up and bring back items that you'd like to store in self-storage.</Text>
        <Text>Swipe to learn more!</Text>
        <Text>Discover full-service storage near you!</Text>
        <Button
          title="Find a unit!"
          onPress={()=>Alert.alert('finding storage...')}
        />
        <Text>Returning user? Login here!</Text>
        <Button
          title="Login"
          onPress={()=>this.props.navigation.navigate('HomeScreen')}
        />
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
