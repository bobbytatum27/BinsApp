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
        startedAt
      }
      customers {
        nextToken
        startedAt
      }
      orders {
        nextToken
        startedAt
      }
      units {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        startedAt
      }
      customers {
        nextToken
        startedAt
      }
      orders {
        nextToken
        startedAt
      }
      units {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        startedAt
      }
      customers {
        nextToken
        startedAt
      }
      orders {
        nextToken
        startedAt
      }
      units {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTenant = /* GraphQL */ `
  subscription OnCreateTenant($owner: String) {
    onCreateTenant(owner: $owner) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      address {
        id
        tenantID
        streetAddress
        building
        city
        state
        zip
        parking
      }
      licenseNumber
      licenseState
      orders {
        nextToken
        startedAt
      }
      boxes {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTenant = /* GraphQL */ `
  subscription OnUpdateTenant($owner: String) {
    onUpdateTenant(owner: $owner) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      address {
        id
        tenantID
        streetAddress
        building
        city
        state
        zip
        parking
      }
      licenseNumber
      licenseState
      orders {
        nextToken
        startedAt
      }
      boxes {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTenant = /* GraphQL */ `
  subscription OnDeleteTenant($owner: String) {
    onDeleteTenant(owner: $owner) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      address {
        id
        tenantID
        streetAddress
        building
        city
        state
        zip
        parking
      }
      licenseNumber
      licenseState
      orders {
        nextToken
        startedAt
      }
      boxes {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
