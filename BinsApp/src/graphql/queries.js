/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTenant = /* GraphQL */ `
  query GetTenant($id: ID!) {
    getTenant(id: $id) {
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
export const listTenants = /* GraphQL */ `
  query ListTenants(
    $filter: ModelTenantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getBox = /* GraphQL */ `
  query GetBox($id: ID!) {
    getBox(id: $id) {
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
export const listBoxs = /* GraphQL */ `
  query ListBoxs(
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoxs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getFacility = /* GraphQL */ `
  query GetFacility($id: ID!) {
    getFacility(id: $id) {
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
export const listFacilitys = /* GraphQL */ `
  query ListFacilitys(
    $filter: ModelFacilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFacilitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
