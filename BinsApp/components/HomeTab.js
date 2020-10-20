import React from 'react';
import { Ionicons } from '@expo/vector-icons';

// The Stacks that that are the main component rendered for each tab
import HomeStackScreen from './HomeTabStacks/HomeStackScreen.js'
import MenuStackScreen from './HomeTabStacks/MenuStackScreen.js';
import OrderStackScreen from './HomeTabStacks/OrderStackScreen.js';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/*
 * Contains the Tab Navigator rendered at the main Home Screen Section (Home, Orders, Menu)
 */
export default class HomeTab extends React.Component {

    /*
     * Determines the icon to put on the Tab Image by using the route name
     * passed from the TabNavigator.
     *
     * @param {route} The route obj (destructured I think)
     * @return An object called tabBarIcon which renders the appropriate Ionicon image
     */
    tabImage = ({route}) => ({
        tabBarIcon: ({color}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'ios-home';
            } else if (route.name === 'Menu') {
              iconName = 'ios-list';
            } else if (route.name === 'Orders') {
              iconName = 'ios-clipboard';
            }

            return <Ionicons name={iconName} size={22} color={color} />;
          },
    });

    render() {
        const Tab = createBottomTabNavigator();

        // Tab Bar Config Options
        const tabBarOpts = {
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            style: {backgroundColor: '#7B1FA2'},
            showLabel: false
        }

        return (
            <Tab.Navigator
                screenOptions={this.tabImage}
                tabBarOptions={tabBarOpts}
                initialRouteName='Home'
            >
                <Tab.Screen name="Orders" component={OrderStackScreen}/>
                <Tab.Screen name="Home" component={HomeStackScreen}/>
                <Tab.Screen name="Menu" component={MenuStackScreen}/>
            </Tab.Navigator>
        );
    }
}
