import React from 'react';

//Order Stack Screens
import Orders from '../../screens/Orders.js'

// create Order Stack Obj with Nav, Screen Stack Components
import { createStackNavigator } from '@react-navigation/stack';
const OrderStack = createStackNavigator();

/*
 * Contains the Order Stack Navigator
 */
export default OrderStackScreen = () => {
    // Used to style the Order Stack Screen Header
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
        <OrderStack.Navigator screenOptions={screenOpts}>
            <OrderStack.Screen name="Orders" component={Orders}/>
        </OrderStack.Navigator>
    );
}