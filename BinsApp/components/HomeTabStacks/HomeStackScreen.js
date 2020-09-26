import React from 'react';

// Home Stack Screens
import Home from '../../screens/Home.js'
import Help from '../../screens/Help.js'
import StorageInventory from '../../screens/StorageInventory.js'
import ScheduleAppointment from '../../screens/ScheduleAppointment.js'
import Review from '../../screens/Review.js'
import Confirmation from '../../screens/Confirmation.js'
import HomeInventory from '../../screens/HomeInventory.js'
import NewItem from '../../screens/NewItem.js'
import Menu from '../../screens/Menu.js'

// create Home Stack Obj with Nav, Screen Stack Components
import { createStackNavigator } from '@react-navigation/stack';
const HomeStack = createStackNavigator();

/*
 * Contains the Home Stack Navigator
 */
export default HomeStackScreen = (props) => {
    // Used to style the Home Stack Screen Header
    const screenOpts = {
        headerStyle: {
            backgroundColor: '#7B1FA2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    }

    return (
        <HomeStack.Navigator screenOptions={screenOpts}>
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