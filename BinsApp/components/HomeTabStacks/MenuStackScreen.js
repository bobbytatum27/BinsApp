import React from 'react';

import Help from '../../screens/Help.js'
import ViewProfile from '../../screens/ViewProfile.js'
import EditProfile from '../../screens/EditProfile.js'
import EditBilling from '../../screens/EditBilling.js'
import ViewPlan from '../../screens/ViewPlan.js'
import EditPlan from '../../screens/EditPlan.js'
import Menu from '../../screens/Menu.js'

import { createStackNavigator } from '@react-navigation/stack';

const MenuStack = createStackNavigator();

export default MenuStackScreen = () => {
    return (
    <MenuStack.Navigator 
        screenOptions={{
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