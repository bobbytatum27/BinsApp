/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTenant = /* GraphQL */ `
  mutation CreateTenant(
    $input: CreateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    createTenant(input: $input, condition: $condition) {
      id
      name
      email
      phone
      address {
        id
        owner {
          id
          name
          email
          phone
          licenseNumber
          licenseState
          facility
          createdAt
          updatedAt
        }
        streetAddress
        building
        city
        state
        zip
        parking
        createdAt
        updatedAt
      }
      licenseNumber
      licenseState
      orders {
        id
        date
        time
        tenant {
          id
          name
          email
          phone
          licenseNumber
          licenseState
          facility
          createdAt
          updatedAt
        }
        address {
          id
          streetAddress
          building
          city
          state
          zip
          parking
          createdAt
          updatedAt
        }
        jobType
        items
        email
        phone
      }
      items {
        items {
          id
          owner
          date
          time
          inStorage
          photo
          location
          createdAt
          updatedAt
        }
        nextToken
      }
      facility
      createdAt
      updatedAt
    }
  }
`;
export const updateTenant = /* GraphQL */ `
  mutation UpdateTenant(
    $input: UpdateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    updateTenant(input: $input, condition: $condition) {
      id
      name
      email
      phone
      address {
        id
        owner {
          id
          name
          email
          phone
          licenseNumber
          licenseState
          facility
          createdAt
          updatedAt
        }
        streetAddress
        building
        city
        state
        zip
        parking
        createdAt
        updatedAt
      }
      licenseNumber
      licenseState
      orders {
        id
        date
        time
        tenant {
          id
          name
          email
          phone
          licenseNumber
          licenseState
          facility
          createdAt
          updatedAt
        }
        address {
          id
          streetAddress
          building
          city
          state
          zip
          parking
          createdAt
          updatedAt
        }
        jobType
        items
        email
        phone
      }
      items {
        items {
          id
          owner
          date
          time
          inStorage
          photo
          location
          createdAt
          updatedAt
        }
        nextToken
      }
      facility
      createdAt
      updatedAt
    }
  }
`;
export const deleteTenant = /* GraphQL */ `
  mutation DeleteTenant(
    $input: DeleteTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    deleteTenant(input: $input, condition: $condition) {
      id
      name
      email
      phone
      address {
        id
        owner {
          id
          name
          email
          phone
          licenseNumber
          licenseState
          facility
          createdAt
          updatedAt
        }
        streetAddress
        building
        city
        state
        zip
        parking
        createdAt
        updatedAt
      }
      licenseNumber
      licenseState
      orders {
        id
        date
        time
        tenant {
          id
          name
          email
          phone
          licenseNumber
          licenseState
          facility
          createdAt
          updatedAt
        }
        address {
          id
          streetAddress
          building
          city
          state
          zip
          parking
          createdAt
          updatedAt
        }
        jobType
        items
        email
        phone
      }
      items {
        items {
          id
          owner
          date
          time
          inStorage
          photo
          location
          createdAt
          updatedAt
        }
        nextToken
      }
      facility
      createdAt
      updatedAt
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      owner {
        id
        name
        email
        phone
        address {
          id
          streetAddress
          building
          city
          state
          zip
          parking
          createdAt
          updatedAt
        }
        licenseNumber
        licenseState
        orders {
          id
          date
          time
          jobType
          items
          email
          phone
        }
        items {
          nextToken
        }
        facility
        createdAt
        updatedAt
      }
      streetAddress
      building
      city
      state
      zip
      parking
      createdAt
      updatedAt
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      owner {
        id
        name
        email
        phone
        address {
          id
          streetAddress
          building
          city
          state
          zip
          parking
          createdAt
          updatedAt
        }
        licenseNumber
        licenseState
        orders {
          id
          date
          time
          jobType
          items
          email
          phone
        }
        items {
          nextToken
        }
        facility
        createdAt
        updatedAt
      }
      streetAddress
      building
      city
      state
      zip
      parking
      createdAt
      updatedAt
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      owner {
        id
        name
        email
        phone
        address {
          id
          streetAddress
          building
          city
          state
          zip
          parking
          createdAt
          updatedAt
        }
        licenseNumber
        licenseState
        orders {
          id
          date
          time
          jobType
          items
          email
          phone
        }
        items {
          nextToken
        }
        facility
        createdAt
        updatedAt
      }
      streetAddress
      building
      city
      state
      zip
      parking
      createdAt
      updatedAt
    }
  }
`;
export const createBox = /* GraphQL */ `
  mutation CreateBox(
    $input: CreateBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    createBox(input: $input, condition: $condition) {
      id
      owner
      date
      time
      inStorage
      photo
      location
      facility {
        id
        address
        boxes {
          id
          owner
          date
          time
          inStorage
          photo
          location
          createdAt
          updatedAt
        }
        customers {
          nextToken
        }
        orders {
          id
          date
          time
          jobType
          items
          email
          phone
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateBox = /* GraphQL */ `
  mutation UpdateBox(
    $input: UpdateBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    updateBox(input: $input, condition: $condition) {
      id
      owner
      date
      time
      inStorage
      photo
      location
      facility {
        id
        address
        boxes {
          id
          owner
          date
          time
          inStorage
          photo
          location
          createdAt
          updatedAt
        }
        customers {
          nextToken
        }
        orders {
          id
          date
          time
          jobType
          items
          email
          phone
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteBox = /* GraphQL */ `
  mutation DeleteBox(
    $input: DeleteBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    deleteBox(input: $input, condition: $condition) {
      id
      owner
      date
      time
      inStorage
      photo
      location
      facility {
        id
        address
        boxes {
          id
          owner
          date
          time
          inStorage
          photo
          location
          createdAt
          updatedAt
        }
        customers {
          nextToken
        }
        orders {
          id
          date
          time
          jobType
          items
          email
          phone
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFacility = /* GraphQL */ `
  mutation CreateFacility(
    $input: CreateFacilityInput!
    $condition: ModelFacilityConditionInput
  ) {
    createFacility(input: $input, condition: $condition) {
      id
      address
      boxes {
        id
        owner
        date
        time
        inStorage
        photo
        location
        facility {
          id
          address
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      customers {
        items {
          id
          name
          email
          phone
          licenseNumber
          licenseState
          facility
          createdAt
          updatedAt
        }
        nextToken
      }
      orders {
        id
        date
        time
        tenant {
          id
          name
          email
          phone
          licenseNumber
          licenseState
          facility
          createdAt
          updatedAt
        }
        address {
          id
          streetAddress
          building
          city
          state
          zip
          parking
          createdAt
          updatedAt
        }
        jobType
        items
        email
        phone
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFacility = /* GraphQL */ `
  mutation UpdateFacility(
    $input: UpdateFacilityInput!
    $condition: ModelFacilityConditionInput
  ) {
    updateFacility(input: $input, condition: $condition) {
      id
      address
      boxes {
        id
        owner
        date
        time
        inStorage
        photo
        location
        facility {
          id
          address
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      customers {
        items {
          id
          name
          email
          phone
          licenseNumber
          licenseState
          facility
          createdAt
          updatedAt
        }
        nextToken
      }
      orders {
        id
        date
        time
        tenant {
          id
          name
          email
          phone
          licenseNumber
          licenseState
          facility
          createdAt
          updatedAt
        }
        address {
          id
          streetAddress
          building
          city
          state
          zip
          parking
          createdAt
          updatedAt
        }
        jobType
        items
        email
        phone
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFacility = /* GraphQL */ `
  mutation DeleteFacility(
    $input: DeleteFacilityInput!
    $condition: ModelFacilityConditionInput
  ) {
    deleteFacility(input: $input, condition: $condition) {
      id
      address
      boxes {
        id
        owner
        date
        time
        inStorage
        photo
        location
        facility {
          id
          address
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      customers {
        items {
          id
          name
          email
          phone
          licenseNumber
          licenseState
          facility
          createdAt
          updatedAt
        }
        nextToken
      }
      orders {
        id
        date
        time
        tenant {
          id
          name
          email
          phone
          licenseNumber
          licenseState
          facility
          createdAt
          updatedAt
        }
        address {
          id
          streetAddress
          building
          city
          state
          zip
          parking
          createdAt
          updatedAt
        }
        jobType
        items
        email
        phone
      }
      createdAt
      updatedAt
    }
  }
`;
