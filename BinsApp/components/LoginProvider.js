import React, {createContext, useState} from 'react';
import { Auth } from 'aws-amplify';

// for login,signup context
export const LoginContext = createContext();

export class LoginProvider extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            test: 'Test: State passed through.'
        };
    }
    
    // probably need to make this a promise! so on .then you can navigate.
    login = () => {
        console.log('working...')   // to verify the func is running
        Auth.signIn({
            username: 'bogustestbnb@gmail.com',
            password: 'XYZ253jksdgUUGw235',
        })
        .then(() => {
            console.log('successful sign in!');
            console.log('isLoggedIn before: ' + this.state.isLoggedIn); // should be false
            this.setState({isLoggedIn: true});
            console.log('isLoggedIn after: ' + this.state.isLoggedIn);  // should be true
        })
        .catch(err => console.log('error signing in!: ', err));
    }

    // still needs to be written
    logout = () => this.setState({isLoggedIn: false});

    render() {
        return (
            <LoginContext.Provider value={{...this.state, login: this.login, logout: this.logout}}>
                {this.props.children}
            </LoginContext.Provider>
        );
    }
}



/*
    For reference: this is the original context code in function form

export function LoginProvider(props) {
  const [isLoggedIn, login] = useState(0);      // to be used for the actual login context value
  return (
    <LoginContext.Provider value={isLoggedIn}>
      {props.children}
    </LoginContext.Provider>
  )
}
*/