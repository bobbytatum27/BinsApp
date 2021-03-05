import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';

/*
 * Imports for the main two navigation flows.
 * 
 * HomeTab: The tab navigator contained at the home screen (for authenticated users only).
 * SignupLoginStack: The stack navigator used for authentication. Initiates either signup or login flow.
 */
import HomeTab from './components/HomeTab';
import SignupLoginStack from './components/SignupLoginStacks/SignupLoginStack.js'

import {LoginProvider, LoginContext} from './components/LoginProvider.js'

import Amplify from "aws-amplify"
import config from "./aws-exports"

Amplify.configure(config);


function App() {
  const loginContext = useContext(LoginContext);

  return (
    <NavigationContainer>

      {loginContext.isLoggedIn == false ? (
        <SignupLoginStack />
      ) : (
        <HomeTab />
      )}

    </NavigationContainer>
  );
}

// to provide the LoginContext to everything in app
function AppWrapped() {
  return(
    <LoginProvider>
      <App />
    </LoginProvider>
  )
}

export default AppWrapped;