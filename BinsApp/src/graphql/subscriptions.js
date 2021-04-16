/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTenant = /* GraphQL */ `
  subscription OnCreateTenant {
    onCreateTenant {
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
export const onUpdateTenant = /* GraphQL */ `
  subscription OnUpdateTenant {
    onUpdateTenant {
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
export const onDeleteTenant = /* GraphQL */ `
  subscription OnDeleteTenant {
    onDeleteTenant {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
export const onCreateBox = /* GraphQL */ `
  subscription OnCreateBox {
    onCreateBox {
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
export const onUpdateBox = /* GraphQL */ `
  subscription OnUpdateBox {
    onUpdateBox {
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
export const onDeleteBox = /* GraphQL */ `
  subscription OnDeleteBox {
    onDeleteBox {
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
export const onCreateFacility = /* GraphQL */ `
  subscription OnCreateFacility {
    onCreateFacility {
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
export const onUpdateFacility = /* GraphQL */ `
  subscription OnUpdateFacility {
    onUpdateFacility {
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
export const onDeleteFacility = /* GraphQL */ `
  subscription OnDeleteFacility {
    onDeleteFacility {
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
