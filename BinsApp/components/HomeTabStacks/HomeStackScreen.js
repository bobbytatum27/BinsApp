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
import EditAddress from '../../screens/EditAddress.js'
import ViewOrder from '../../screens/ViewOrder.js'
import NewAppointment from '../../screens/NewAppointment.js'
import Pickup from '../../screens/Pickup.js'
import ViewStorageInventory from '../../screens/ViewStorageInventory.js'

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
            <HomeStack.Screen name='StorageInventoryScreen' component={StorageInventory} options={{title: "Stored Items"}}/>
            <HomeStack.Screen name='ScheduleAppointmentScreen' component={ScheduleAppointment} options={{title: "Schedule Appointment"}}/>
            <HomeStack.Screen name='ReviewScreen' component={Review} options={{title: "Review"}}/>
            <HomeStack.Screen name='ConfirmationScreen' component={Confirmation} options={{title: "Confirmation", headerLeft: null}}/>
            <HomeStack.Screen name='HomeInventoryScreen' component={HomeInventory} options={{title: "Returned Items"}}/>
            <HomeStack.Screen name='NewItemScreen' component={NewItem} options={{title: "Pickup"}}/>
            <HomeStack.Screen name='Menu' component={Menu}/>
            <HomeStack.Screen name="EditAddress" component={EditAddress} options={{title: "Edit Address"}}/>
            <HomeStack.Screen name="ViewOrder" component={ViewOrder} options={{title: "View Order"}}/>
            <HomeStack.Screen name="NewAppointment" component={NewAppointment} options={{title: "New Appointment"}}/>
            <HomeStack.Screen name="Pickup" component={Pickup} options={{title: "Pickup"}}/>
            <HomeStack.Screen name="ViewStorageInventory" component={ViewStorageInventory} options={{title: "Stored Items"}}/>
        </HomeStack.Navigator>
    );
}
