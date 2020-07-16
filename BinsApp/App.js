import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Landing from './screens/Landing.js';
import Home from './screens/Home.js'
import Inventory from './screens/Inventory.js'
import ScheduleAppointment from './screens/ScheduleAppointment.js'
import Review from './screens/Review.js'
import Confirmation from './screens/Confirmation.js'
import WelcomePage from './screens/WelcomePage.js'
import SelectFacility from './screens/SelectFacility.js'
import BillingInfo from './screens/BillingInfo.js'
import AppointmentScheduler from './screens/AppointmentScheduler.js'
import UserInfo from './screens/UserInfo.js'

const AppStack = createStackNavigator(
    {
    HomeScreen: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Bins',
        headerTitleStyle: {
          fontSize: 60,
          marginTop: -30
        }
      }
    },
    InventoryScreen: {
      screen: Inventory,
      navigationOptions: {
        headerTitle: 'Your Inventory'
      }
    },
    ScheduleAppointmentScreen:{
      screen: ScheduleAppointment,
      navigationOptions: {
        headerTitle: 'Schedule Appointment'
      }
    },
    ReviewScreen:{
      screen: Review,
      navigationOptions: {
        headerTitle: 'Review'
      }
    },
    ConfirmationScreen:{
      screen: Confirmation,
      navigationOptions: {
        headerTitle: 'Confirmation'
      }
    },
    WelcomePageScreen:{
      screen: WelcomePage,
    },
    SelectFacilityScreen:{
      screen: SelectFacility,
      navigationOptions: {
        headerTitle: 'Select Storage Facility'
      }
    },
    AppointmentSchedulerScreen:{
      screen: AppointmentScheduler,
      navigationOptions: {
        headerTitle: 'Schedule Appointment'
      }
    },
    AccountInfoScreen:{
      screen: UserInfo,
      navigationOptions: {
        headerTitle: 'Create an Account'
      }
    },
    BillingInfoScreen:{
      screen: BillingInfo,
      navigationOptions: {
        headerTitle: 'Billing Info'
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {backgroundColor: 'purple'},
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 20
      }
    }
  }
);

const AuthStack = createStackNavigator(
  {
    LoginRoute: Landing
  },
  {
    defaultNavigationOptions: {
      header: null
  }}
);

export default createAppContainer(createStackNavigator(
  {
    Auth: AuthStack,
    App: AppStack
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
));
