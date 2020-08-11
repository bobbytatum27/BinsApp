import React, {createContext, useState} from 'react';
import { Auth } from 'aws-amplify';

// for login/signup context
export const LoginContext = createContext();

export class LoginProvider extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
        };
    }

    /*
     * Login Promise
     * To login a user via AWS Amplify. Also changes isLoggedIn boolean, which 
     * conditionally renders appropriate screens (pending state).
     * 
     * @param email: string of user email
     * @param password: string of user password
     * @return Promise
     */ 
    login = (email, password) => {
        return new Promise((resolve, reject) => {
            Auth.signIn({
                username: email,
                password: password,
            })
            .then(() => {
                this.setState({isLoggedIn: true});
                resolve('Successful Sign In');
            })
            .catch(err => reject(err));
        });
    }

    /*
     * Logout Promise
     * To log a user out via AWS Amplify. Also changes isLoggedIn boolean, which forces user back
     * to Landing page.
     * 
     * @return Promise
     */
    logout = () => {
        return new Promise((resolve, reject) => {
            console.log('login state before signout: ' + this.state.isLoggedIn);
            Auth.signOut()
            .then(() => {
                this.setState({isLoggedIn: false});
                console.log('login state after logout: ' + this.state.isLoggedIn);
                resolve('successful sign out');
            })
            .catch(err => reject('error signing out!'));
        });
    }

    /*
     * Signup Promise
     * Registers a user via AWS Amplify. Also changes the isLoggedIn boolean to
     * force the user to the Home Page. TODO arg check in login page? or here? A thought - before new Promise, can check for input validation and return Alert if invalid. 
     * Note that Auth.signUp may force errors so they need to be checked here too.
     * 
     * @param email: The user's email as a string
     * @param password: The user's password as a string
     * @param name: The user's name as a string
     * @param phone_num: The user's phone num (what type is amplify looking for?)
     * @param address: The user's address as a string, fields separated by a space
     * @return Promise (for now only a promise, potentially Error obj in future)
     */ 
    signup = (email, password, name, phone_num, address) => {
        return new Promise((resolve, reject) => {
            console.log('signing up!');
            Auth.signUp({
                username: email,
                password: password,
                attributes: {
                  name: name,
                  phone_number: phone_num,
                  address: address,
                },
            })
            .then(() => {
                resolve('Successful Sign Up');
            })
            .catch(err => reject(err));
        });
    }

    contactConfirmation = (email, code) => {
        return new Promise((resolve, reject) => {
            Auth.confirmSignUp(email, code)
            .then(() => resolve('Code Confirmed'))
            .catch((err) => reject(err));
        });
    }

    completeSignup = (specialInstructions) => {
        return new Promise((resolve, reject) => {
            console.log(specialInstructions, 'Special Instr. still need to be pushed!')
            this.setState({isLoggedIn: true});
            resolve('successful sign up completed.');
        });
    }

    resetPassword = (email) => {
        return new Promise((resolve, reject) => {
            console.log('Initiating Password Reset...');
            Auth.forgotPassword(email)
            .then(() => resolve('code sent'))
            .catch((err) => reject(err));
        });
    }

    confirmResetPassword = (email, code, password) => {
        return new Promise((resolve, reject) => {
            Auth.forgotPasswordSubmit(email, code, password)
            .then(() => resolve('Successfully Reset Password'))
            .catch((err) => reject(err));
        });
    }

    render() {
        return (
            <LoginContext.Provider value={{...this.state, login: this.login, logout: this.logout, signup: this.signup, contactConfirmation: this.contactConfirmation, completeSignup: this.completeSignup, resetPassword: this.resetPassword, confirmResetPassword: this.confirmResetPassword}}>
                {this.props.children}
            </LoginContext.Provider>
        );
    }
}