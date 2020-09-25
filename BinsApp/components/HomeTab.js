import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import HomeStackScreen from './HomeTabStacks/HomeStackScreen.js'
import MenuStackScreen from './HomeTabStacks/MenuStackScreen.js';
import OrderStackScreen from './HomeTabStacks/OrderStackScreen.js';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default class HomeTab extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const Tab = createBottomTabNavigator();

        return (
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
        );
    }
}