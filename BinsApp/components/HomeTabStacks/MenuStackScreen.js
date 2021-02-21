import React from 'react';

// Menu Stack Screens
import Help from '../../screens/Help.js'
import ViewProfile from '../../screens/ViewProfile.js'
import EditName from '../../screens/EditName.js'
import EditPhone from '../../screens/EditPhone.js'
import EditAddress from '../../screens/EditAddress.js'
import EditSpecialInstructions from '../../screens/EditSpecialInstructions.js'
import EditBilling from '../../screens/EditBilling.js'
import ViewPlan from '../../screens/ViewPlan.js'
import EditPlan from '../../screens/EditPlan.js'
import Menu from '../../screens/Menu.js'

// create Menu Stack Obj with Nav, Screen Stack Components
import { createStackNavigator } from '@react-navigation/stack';
const MenuStack = createStackNavigator();

/*
 * Contains the Menu Stack Navigator
 */
export default MenuStackScreen = (props) => {
    // Used to style the Menu Stack Screen Header
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
        <MenuStack.Navigator screenOptions={screenOpts}>
            <MenuStack.Screen name="Menu" component={Menu}/>
            <MenuStack.Screen name="ViewProfile" component={ViewProfile} options={{title: "View Profile"}}/>
            <MenuStack.Screen name="EditName" component={EditName} options={{title: "Edit Name"}}/>
            <MenuStack.Screen name="EditPhone" component={EditPhone} options={{title: "Edit Phone"}}/>
            <MenuStack.Screen name="EditAddress" component={EditAddress} options={{title: "Edit Address"}}/>
            <MenuStack.Screen name="EditSpecialInstructions" component={EditSpecialInstructions} options={{title: "Edit Special Instructions"}}/>
            <MenuStack.Screen name="Billing" component={EditBilling}/>
            <MenuStack.Screen name="ViewPlan" component={ViewPlan} options={{title: "Your Storage Plan"}}/>
            <MenuStack.Screen name="EditPlan" component={EditPlan} options={{title: "Edit Storage Plan"}}/>
            <MenuStack.Screen name='FAQ' component={Help}/>
        </MenuStack.Navigator>
    );
}
