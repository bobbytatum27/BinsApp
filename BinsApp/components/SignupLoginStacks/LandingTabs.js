import React from 'react';

// Landing Tab Stack Screens
import Landing from '../../screens/Landing.js';
import Landing2 from '../../screens/Landing2.js';
import Landing3 from '../../screens/Landing3.js';
import Landing4 from '../../screens/Landing4.js';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const LandingTabStack = createMaterialTopTabNavigator();

export default LandingTabs = (props) => {
    return (
        <LandingTabStack.Navigator tabBarOptions={{showLabel: false}}>
            <LandingTabStack.Screen name='Landing' component={Landing}/>
            <LandingTabStack.Screen name='Landing2' component={Landing2}/>
            <LandingTabStack.Screen name='Landing3' component={Landing3}/>
            <LandingTabStack.Screen name='Landing4' component={Landing4}/>
        </LandingTabStack.Navigator>
    );
}