import React, { Component, createContext, useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

import Landing from './screens/Landing.js';
import Landing2 from './screens/Landing2.js';
import Landing3 from './screens/Landing3.js';
import Landing4 from './screens/Landing4.js';
import Home from './screens/Home.js'
import StorageInventory from './screens/StorageInventory.js'
import ScheduleAppointment from './screens/ScheduleAppointment.js'
import Review from './screens/Review.js'
import Confirmation from './screens/Confirmation.js'
import WelcomePage from './screens/WelcomePage.js'
import SelectFacility from './screens/SelectFacility.js'
import BillingInfo from './screens/BillingInfo.js'
import InitialAppointment from './screens/InitialAppointment.js'
import UserInfo from './screens/UserInfo.js'
import HomeInventory from './screens/HomeInventory.js'
import NewItem from './screens/NewItem.js'
import Account from './screens/Account.js'
import Orders from './screens/Orders.js'
import Login from './screens/Login.js'

import {LoginProvider, LoginContext} from './components/LoginProvider.js'

import Amplify from "aws-amplify"
import config from "./aws-exports"
import { withAuthenticator } from "aws-amplify-react-native"
Amplify.configure(config)

// for stack nav
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const LandingTab = createMaterialTopTabNavigator();

function App() {
  const loginContext = useContext(LoginContext);
  console.log(loginContext);

  return (
    <NavigationContainer>
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
        <Stack.Screen name='Home' component={HomeTabs} options={{title: "Bins"}}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SelectFacilityScreen' component={SelectFacility} options={{title: "Select Storage Facility"}}/>
        <Stack.Screen name='InitialAppointmentScreen' component={InitialAppointment} options={{title: "Schedule Appointment"}}/>
        <Stack.Screen name='AccountInfoScreen' component={UserInfo} options={{title: "Create an Account"}}/>
        <Stack.Screen name='BillingInfoScreen' component={BillingInfo} options={{title: "Billing Info"}}/>
        <Stack.Screen name='StorageInventoryScreen' component={StorageInventory} options={{title: "Deliver"}}/>
        <Stack.Screen name='ScheduleAppointmentScreen' component={ScheduleAppointment} options={{title: "Schedule Appointment"}}/>
        <Stack.Screen name='ReviewScreen' component={Review} options={{title: "Review"}}/>
        <Stack.Screen name='ConfirmationScreen' component={Confirmation} options={{title: "Confirmation"}}/>
        <Stack.Screen name='HomeInventoryScreen' component={HomeInventory} options={{title: "Pickup"}}/>
        <Stack.Screen name='NewItemScreen' component={NewItem} options={{title: "Pickup"}}/>
        <Stack.Screen name='EditAccountScreen' component={Account}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return(
    <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({color}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'ios-home';
            } else if (route.name === 'Account') {
              iconName = 'ios-person';
            } else if (route.name === 'Orders') {
              iconName = 'ios-list';
            }

            return <Ionicons name={iconName} size={22} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          style: {backgroundColor: '#7B1FA2'}
        }}
        initialRouteName='Home'
      >
      <Tab.Screen name="Orders" component={Orders}/>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Account" component={Account}/>
    </Tab.Navigator>
  );
}

function LandingTabs() {
  return(
    <LandingTab.Navigator swipeEnabled='true'
        initialRouteName='Landing'
        tabBarOptions={{showLabel: false}}>
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