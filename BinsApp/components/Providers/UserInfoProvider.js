import React, {createContext, useState} from 'react';
import { Auth, API } from 'aws-amplify';
import * as queries from '../../src/graphql/queries'
import { AppRegistry } from 'react-native';

// for login/signup context
export const UserInfoContext = createContext();

export class UserInfoProvider extends React.Component{
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this)
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            specialInstructions: '',
            facilityID: '',
            dataSourceStorage: [],
            dataSourceHome: [],
            dataSourcePastOrders: [],
            dataSourceNewOrders: [],
        };
    }

    async fetchData() {
        const currentUserInfo = await Auth.currentUserInfo();
        const userEmail = currentUserInfo.attributes['email'];
        const userName = currentUserInfo.attributes['name'];
        const tenantInfo = await API.graphql({query: queries.getTenant, variables: {id: userEmail}});
            const tenantFacilityID = tenantInfo.data.getTenant.facilityID
        const tenantBoxes = await API.graphql({query: queries.boxesByTenant, variables: { tenantID: userEmail }});
            const boxesInStorage = tenantBoxes.data.boxesByTenant.items.filter(function(item){
                return item.status == 'IN_STORAGE'
            });
            const boxesReturned = tenantBoxes.data.boxesByTenant.items.filter(function(item){
                return item.status == 'RETURNED'
            });
        const tenantOrders = await API.graphql({query: queries.ordersByTenant, variables: { tenantID: userEmail}});
            const pastOrders = tenantOrders.data.ordersByTenant.items.filter(function(item){
                return item.status == 'COMPLETED'
            }); 
            const newOrders = tenantOrders.data.ordersByTenant.items.filter(function(item){
                return item.status == 'INCOMPLETE'
            }); 
        this.setState({email: userEmail,
                       name: userName,
                       facilityID: tenantFacilityID,
                       dataSourceHome: boxesReturned,
                       dataSourceStorage: boxesInStorage,
                       dataSourcePastOrders: pastOrders,
                       dataSourceNewOrders: newOrders
                    });
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



    render() {
        return (
            <UserInfoContext.Provider value={{...this.state, fetchData: this.fetchData}}>
                {this.props.children}
            </UserInfoContext.Provider>
        );
    }
}
