import React, {createContext, useState} from 'react';

// for login,signup context
export const LoginContext = createContext();
export function LoginProvider(props) {
  const [isLoggedIn, login] = useState(false);      // to be used for the actual login context value
  return (
    <LoginContext.Provider value={'test'}>
      {props.children}
    </LoginContext.Provider>
  )
}