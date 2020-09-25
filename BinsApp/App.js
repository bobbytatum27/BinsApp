import React, { Component, createContext, useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import { Ionicons } from '@expo/vector-icons';

import Landing from './screens/Landing.js';
import Landing2 from './screens/Landing2.js';
import Landing3 from './screens/Landing3.js';
import Landing4 from './screens/Landing4.js';
import SelectFacility from './screens/SelectFacility.js'
import BillingInfo from './screens/BillingInfo.js'
import InitialAppointment from './screens/InitialAppointment.js'
import InitialConfirmation from './screens/InitialConfirmation.js'
import UserInfo from './screens/UserInfo.js'
import Login from './screens/Login.js'
import PasswordReset from './screens/PasswordReset.js'
import ConfirmContactInfo from './screens/ConfirmContactInfo.js'
import HomeTab from './components/HomeTab';

import {LoginProvider, LoginContext} from './components/LoginProvider.js'

import Amplify from "aws-amplify"
import config from "./aws-exports"
import { withAuthenticator } from "aws-amplify-react-native"

Amplify.configure(config);

// for stack nav
const Stack = createStackNavigator();
const LandingTab = createMaterialTopTabNavigator();


function App() {
  const loginContext = useContext(LoginContext);
  console.log("------------------At app----------------------");

  return (
    <NavigationContainer>
      {loginContext.isLoggedIn == false ? (
        <>
         <Stack.Navigator screenOptions={{
           headerStyle: {
             backgroundColor: '#7B1FA2',
           },
           headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
           },
         }}>
          <Stack.Screen name='Landing' component={LandingTabs} options={{headerShown: false}}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='ConfirmContactInfo' component={ConfirmContactInfo}/>
          <Stack.Screen name='PasswordReset' component={PasswordReset}/>
          <Stack.Screen name='SelectFacilityScreen' component={SelectFacility} options={{title: "Select Storage Facility"}}/>
          <Stack.Screen name='InitialAppointmentScreen' component={InitialAppointment} options={{title: "Schedule Appointment"}}/>
          <Stack.Screen name='AccountInfoScreen' component={UserInfo} options={{title: "Create an Account"}}/>
          <Stack.Screen name='BillingInfoScreen' component={BillingInfo} options={{title: "Billing Info"}}/>
          <Stack.Screen name='InitialConfirmationScreen' component={InitialConfirmation} options={{title: "Confirmation", headerLeft: null}}/>
          </Stack.Navigator>
        </>
      ) : (
        <>
        <HomeTab />
      </>
    )}
    </NavigationContainer>
  );
}

function LandingTabs() {
  return(
    <LandingTab.Navigator tabBarOptions={{showLabel: false}}>
      <LandingTab.Screen name="Landing" component={Landing}/>
      <LandingTab.Screen name="Landing2" component={Landing2}/>
      <LandingTab.Screen name="Landing3" component={Landing3}/>
      <LandingTab.Screen name="Landing4" component={Landing4}/>
    </LandingTab.Navigator>
  );
}

// to provide the LoginContext to everything in app
function AppWrapped() {
  return(
    <LoginProvider>
      <App />
    </LoginProvider>
  )
}

export default AppWrapped;
//export default withAuthenticator(App, true)
