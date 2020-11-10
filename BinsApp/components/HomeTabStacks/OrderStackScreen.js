import React from 'react';

//Order Stack Screens
import UpcomingOrders from '../../screens/UpcomingOrders.js'
import PastOrders from '../../screens/PastOrders.js'
import ViewOrder from '../../screens/ViewOrder.js'
import ViewPastOrder from '../../screens/ViewPastOrder.js'

// create Order Stack Obj with Nav, Screen Stack Components
import { createStackNavigator } from '@react-navigation/stack';
const OrderStack = createStackNavigator();

/*
 * Contains the Order Stack Navigator
 */
export default OrderStackScreen = (props) => {
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
            <OrderStack.Screen name="PastOrders" component={PastOrders} options={{title: "Order History"}}/>
            <OrderStack.Screen name="ViewPastOrder" component={ViewPastOrder} options={{title: "View Order"}}/>
        </OrderStack.Navigator>
    );
}



/*
<OrderStack.Screen name="UpcomingOrders" component={UpcomingOrders} options={{title: "Upcoming Orders"}}/>
<OrderStack.Screen name="ViewOrder" component={ViewOrder} options={{title: "View Order"}}/>
*/
