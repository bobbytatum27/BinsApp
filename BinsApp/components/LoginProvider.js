import React, {createContext, useState} from 'react';

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

    login = () => this.setState({isLoggedIn: true});
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