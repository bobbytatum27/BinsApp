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
import Help from './screens/Help.js'
import StorageInventory from './screens/StorageInventory.js'
import ScheduleAppointment from './screens/ScheduleAppointment.js'
import Review from './screens/Review.js'
import Confirmation from './screens/Confirmation.js'
import SelectFacility from './screens/SelectFacility.js'
import BillingInfo from './screens/BillingInfo.js'
import InitialAppointment from './screens/InitialAppointment.js'
import InitialConfirmation from './screens/InitialConfirmation.js'
import UserInfo from './screens/UserInfo.js'
import HomeInventory from './screens/HomeInventory.js'
import NewItem from './screens/NewItem.js'
import Orders from './screens/Orders.js'
import Login from './screens/Login.js'
import PasswordReset from './screens/PasswordReset.js'
import ConfirmContactInfo from './screens/ConfirmContactInfo.js'
import ViewProfile from './screens/ViewProfile.js'
import EditProfile from './screens/EditProfile.js'
import EditBilling from './screens/EditBilling.js'
import ViewPlan from './screens/ViewPlan.js'
import EditPlan from './screens/EditPlan.js'
import Menu from './screens/Menu.js'

import {LoginProvider, LoginContext} from './components/LoginProvider.js'

import Amplify from "aws-amplify"
import config from "./aws-exports"
import { withAuthenticator } from "aws-amplify-react-native"

Amplify.configure(config)

// for stack nav
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const OrderStack = createStackNavigator();
const MenuStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const LandingTab = createMaterialTopTabNavigator();
const AccountTab = createMaterialTopTabNavigator();

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
        <Tab.Navigator screenOptions={({ route }) => ({
              tabBarIcon: ({color}) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = 'ios-home';
                } else if (route.name === 'Menu') {
                  iconName = 'ios-list';
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
          <Tab.Screen name="Orders" component={OrderStackScreen}/>
          <Tab.Screen name="Home" component={HomeStackScreen}/>
          <Tab.Screen name="Menu" component={MenuStackScreen}/>
        </Tab.Navigator>
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

function HomeStackScreen() {
  return(
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#7B1FA2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <HomeStack.Screen name='Home' component={Home}/>
      <HomeStack.Screen name='HelpScreen' component={Help} options={{title: "Help"}}/>
      <HomeStack.Screen name='StorageInventoryScreen' component={StorageInventory} options={{title: "Deliver"}}/>
      <HomeStack.Screen name='ScheduleAppointmentScreen' component={ScheduleAppointment} options={{title: "Schedule Appointment"}}/>
      <HomeStack.Screen name='ReviewScreen' component={Review} options={{title: "Review"}}/>
      <HomeStack.Screen name='ConfirmationScreen' component={Confirmation} options={{title: "Confirmation", headerLeft: null}}/>
      <HomeStack.Screen name='HomeInventoryScreen' component={HomeInventory} options={{title: "Pickup"}}/>
      <HomeStack.Screen name='NewItemScreen' component={NewItem} options={{title: "Pickup"}}/>
      <HomeStack.Screen name='Menu' component={Menu}/>
    </HomeStack.Navigator>
  );
}

function OrderStackScreen() {
  return(
    <OrderStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#7B1FA2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <OrderStack.Screen name="Orders" component={Orders}/>
    </OrderStack.Navigator>
  );
}

function MenuStackScreen() {
  return(
    <MenuStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#7B1FA2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <MenuStack.Screen name="Menu" component={Menu}/>
      <MenuStack.Screen name="ViewProfile" component={ViewProfile} options={{title: "View Profile"}}/>
      <MenuStack.Screen name="EditProfile" component={EditProfile} options={{title: "Edit Profile"}}/>
      <MenuStack.Screen name="Billing" component={EditBilling}/>
      <MenuStack.Screen name="ViewPlan" component={ViewPlan} options={{title: "Your Storage Plan"}}/>
      <MenuStack.Screen name="EditPlan" component={EditPlan} options={{title: "Edit Storage Plan"}}/>
      <MenuStack.Screen name='FAQ' component={Help}/>
    </MenuStack.Navigator>
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
