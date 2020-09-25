import React from 'react';

import Orders from '../../screens/Orders.js'

import { createStackNavigator } from '@react-navigation/stack';

const OrderStack = createStackNavigator();

export default OrderStackScreen = () => {
    return (
        <OrderStack.Navigator 
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#7B1FA2',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <OrderStack.Screen name="Orders" component={Orders}/>
        </OrderStack.Navigator>
    );
}