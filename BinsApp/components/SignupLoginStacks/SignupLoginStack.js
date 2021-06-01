import React from 'react';

import AddressInfo from '../../screens/AddressInfo.js'
import BillingInfo from '../../screens/BillingInfo.js'
import InitialAppointment from '../../screens/InitialAppointment.js'
import InitialConfirmation from '../../screens/InitialConfirmation.js'
import UserInfo from '../../screens/UserInfo.js'
import Login from '../../screens/Login.js'
import PasswordReset from '../../screens/PasswordReset.js'
import ConfirmContactInfo from '../../screens/ConfirmContactInfo.js'
import LandingTabs from './LandingTabs.js'
import SelectFacility from '../../screens/SelectFacility.js'
import InitialPickup from '../../screens/InitialPickup.js'
import InitialTerms from '../../screens/InitialTerms.js'

import { createStackNavigator } from '@react-navigation/stack';
const SignupLoginStacks = createStackNavigator();

/*
 * The stack navigator entered on App launch. Only unauthenticated users can access it.
 * Users are authenticated in one of two ways:
 *      1. Signup: User creates an account and inputs their basic info thru the Signup Flow
 *      2. Login: User logs in to existing account.
 * Once authenticated, users enter the HomeTab navigator.
 */
export default SignupLoginStack = (props) => {
    const screenOpts = {
        headerStyle: {
            backgroundColor: '#7B1FA2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    return (
        <SignupLoginStacks.Navigator screenOptions={screenOpts}>
           <SignupLoginStacks.Screen name='Landing' component={LandingTabs} options={{headerShown: false}}/>
           <SignupLoginStacks.Screen name='Login' component={Login}/>
           <SignupLoginStacks.Screen name='ConfirmContactInfo' component={ConfirmContactInfo} options={{title: "Email Confirmation", headerLeft: null}}/>
           <SignupLoginStacks.Screen name='PasswordReset' component={PasswordReset}/>
           <SignupLoginStacks.Screen name='AddressInfo' component={AddressInfo} options={{title: "Address Info"}}/>
           <SignupLoginStacks.Screen name='InitialAppointmentScreen' component={InitialAppointment} options={{title: "Schedule Appointment", headerLeft: null}}/>
           <SignupLoginStacks.Screen name='AccountInfoScreen' component={UserInfo} options={{title: "Create an Account"}}/>
           <SignupLoginStacks.Screen name='BillingInfoScreen' component={BillingInfo} options={{title: "Review"}}/>
           <SignupLoginStacks.Screen name='InitialConfirmationScreen' component={InitialConfirmation} options={{title: "Confirmation", }}/>
           <SignupLoginStacks.Screen name='SelectFacility' component={SelectFacility} options={{title: "Select Facility"}}/>
           <SignupLoginStacks.Screen name='InitialPickup' component={InitialPickup} options={{title: "Select Items"}}/>
           <SignupLoginStacks.Screen name='InitialTermsScreen' component={InitialTerms} options={{title: "Terms and Conditions"}}/>
        </SignupLoginStacks.Navigator>
    );
}
