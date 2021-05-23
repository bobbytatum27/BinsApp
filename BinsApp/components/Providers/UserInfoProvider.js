import React, {createContext, useState} from 'react';
import { Auth, API } from 'aws-amplify';
import * as queries from '../../src/graphql/queries';
import * as mutations from '../../src/graphql/mutations';
import { AppRegistry } from 'react-native';

// for login/signup context
export const UserInfoContext = createContext();

export class UserInfoProvider extends React.Component{
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this)
        this.updateUserName = this.updateUserName.bind(this)
        this.updateUserPhone = this.updateUserPhone.bind(this)
        this.updateUserAddress = this.updateUserAddress.bind(this)
        this.state = {
            name: '',
            email: '',
            phone: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            zip: '',
            specialInstructions: '',
            building: '',
            parking: '',
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
        const tenantInfo = await API.graphql({query: queries.getTenant, variables: {id: userEmail}});
            const tenantFacilityID = tenantInfo.data.getTenant.facilityID
            const userName = tenantInfo.data.getTenant.name
            const userPhone = tenantInfo.data.getTenant.phone
            const userAddressBuilding = tenantInfo.data.getTenant.address[0].building
            const userAddressCity = tenantInfo.data.getTenant.address[0].city
            const userAddressParking = tenantInfo.data.getTenant.address[0].parking
            const userAddressState = tenantInfo.data.getTenant.address[0].state
            const userAddressAddressLine1 = tenantInfo.data.getTenant.address[0].addressLine1
            const userAddressAddressLine2 = tenantInfo.data.getTenant.address[0].addressLine2
            const userAddressZip = tenantInfo.data.getTenant.address[0].zip
            const userAddressSpecialInstructions = tenantInfo.data.getTenant.address[0].specialInstructions
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
                       phone: userPhone,
                       addressLine1: userAddressAddressLine1,
                       addressLine2: userAddressAddressLine2,
                       city: userAddressCity,
                       state: userAddressState,
                       zip: userAddressZip,
                       specialInstructions: userAddressSpecialInstructions,
                       building: userAddressBuilding,
                       parking: userAddressParking,
                       facilityID: tenantFacilityID,
                       dataSourceHome: boxesReturned,
                       dataSourceStorage: boxesInStorage,
                       dataSourcePastOrders: pastOrders,
                       dataSourceNewOrders: newOrders
                    });
    }

    async updateUserName(userEmail, updatedName) {
        const tenantDetails = {
            id: userEmail,
            name: updatedName,
        };
        const updatedUser = await API.graphql({query: mutations.updateTenant, variables: {input: tenantDetails}});
        this.setState({name:updatedName});
    }

    async updateUserPhone(userEmail, updatedPhone) {
        const tenantDetails = {
            id: userEmail,
            phone: updatedPhone,
        };
        const updatedUser = await API.graphql({query: mutations.updateTenant, variables: {input: tenantDetails}});
        this.setState({phone:updatedPhone});
    }

    async updateUserAddress(userEmail, updatedAddress) {
        const tenantDetails = {
            id: userEmail,
            address: updatedAddress,
        };
        const updatedUser = await API.graphql({query: mutations.updateTenant, variables: {input: tenantDetails}});
        this.setState({
            addressLine1: updatedAddress.addressLine1,
            addressLine2: updatedAddress.AddressLine2,
            city: updatedAddress.city,
            state: updatedAddress.state,
            zip: updatedAddress.zip,
            specialInstructions: updatedAddress.specialInstructions,
            building: updatedAddress.building,
            parking: updatedAddress.parking,
        })
    }

    render() {
        return (
            <UserInfoContext.Provider value={{...this.state,
                                              fetchData: this.fetchData,
                                              updateUserName: this.updateUserName,
                                              updateUserPhone: this.updateUserPhone,
                                              updateUserAddress: this.updateUserAddress
                                              }}>
                {this.props.children}
            </UserInfoContext.Provider>
        );
    }
}
