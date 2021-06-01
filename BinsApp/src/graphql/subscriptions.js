/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFacility = /* GraphQL */ `
  subscription OnCreateFacility {
    onCreateFacility {
      id
      name
      address
      boxes {
        nextToken
      }
      customers {
        nextToken
      }
      orders {
        nextToken
      }
      units {
        nextToken
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
      name
      address
      boxes {
        nextToken
      }
      customers {
        nextToken
      }
      orders {
        nextToken
      }
      units {
        nextToken
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
      name
      address
      boxes {
        nextToken
      }
      customers {
        nextToken
      }
      orders {
        nextToken
      }
      units {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUnit = /* GraphQL */ `
  subscription OnCreateUnit {
    onCreateUnit {
      id
      facilityID
      size
      usage
      boxes {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUnit = /* GraphQL */ `
  subscription OnUpdateUnit {
    onUpdateUnit {
      id
      facilityID
      size
      usage
      boxes {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUnit = /* GraphQL */ `
  subscription OnDeleteUnit {
    onDeleteUnit {
      id
      facilityID
      size
      usage
      boxes {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTenant = /* GraphQL */ `
  subscription OnCreateTenant {
    onCreateTenant {
      id
      facilityID
      name
      email
      phone
      unit {
        id
        facilityID
        size
        usage
        createdAt
        updatedAt
      }
      address {
        tenantID
        addressLine1
        addressLine2
        city
        state
        zip
        specialInstructions
        building
        parking
      }
      licenseNumber
      licenseState
      orders {
        nextToken
      }
      boxes {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTenant = /* GraphQL */ `
  subscription OnUpdateTenant {
    onUpdateTenant {
      id
      facilityID
      name
      email
      phone
      unit {
        id
        facilityID
        size
        usage
        createdAt
        updatedAt
      }
      address {
        tenantID
        addressLine1
        addressLine2
        city
        state
        zip
        specialInstructions
        building
        parking
      }
      licenseNumber
      licenseState
      orders {
        nextToken
      }
      boxes {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTenant = /* GraphQL */ `
  subscription OnDeleteTenant {
    onDeleteTenant {
      id
      facilityID
      name
      email
      phone
      unit {
        id
        facilityID
        size
        usage
        createdAt
        updatedAt
      }
      address {
        tenantID
        addressLine1
        addressLine2
        city
        state
        zip
        specialInstructions
        building
        parking
      }
      licenseNumber
      licenseState
      orders {
        nextToken
      }
      boxes {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBox = /* GraphQL */ `
  subscription OnCreateBox {
    onCreateBox {
      id
      tenantID
      facilityID
      unitID
      description
      status
      photo
      location
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBox = /* GraphQL */ `
  subscription OnUpdateBox {
    onUpdateBox {
      id
      tenantID
      facilityID
      unitID
      description
      status
      photo
      location
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBox = /* GraphQL */ `
  subscription OnDeleteBox {
    onDeleteBox {
      id
      tenantID
      facilityID
      unitID
      description
      status
      photo
      location
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      tenantID
      facilityID
      date
      time
      address
      jobType
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      tenantID
      facilityID
      date
      time
      address
      jobType
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      tenantID
      facilityID
      date
      time
      address
      jobType
      status
      createdAt
      updatedAt
    }
  }
`;
