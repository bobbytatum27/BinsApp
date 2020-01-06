import Login from './Login/Login.js';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Screen2 from './screens/Screen2.js'
import Screen3 from './screens/Screen3.js'

const AppStack = createStackNavigator(
  {
    Route2: Screen2,
    Route3: Screen3
  },
  {
    defaultNavigationOptions: {
      headerStyle: {backgroundColor: 'purple'},
      title: 'Select Storage Facility',
      headerTintColor: 'white'
    }
  }
);

const AuthStack = createStackNavigator(
  {
    LoginRoute: Login
  },
  {
    defaultNavigationOptions: {
      header: null
  }}
);

export default createAppContainer(createStackNavigator(
  {
    Auth: AuthStack,
    App: AppStack
  }
));
