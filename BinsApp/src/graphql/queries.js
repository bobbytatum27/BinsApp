/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncFacilities = /* GraphQL */ `
  query SyncFacilities(
    $filter: ModelFacilityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFacilities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFacility = /* GraphQL */ `
  query GetFacility($id: ID!) {
    getFacility(id: $id) {
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
export const listFacilitys = /* GraphQL */ `
  query ListFacilitys(
    $filter: ModelFacilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFacilitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUnits = /* GraphQL */ `
  query SyncUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUnits(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUnit = /* GraphQL */ `
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
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
export const listUnits = /* GraphQL */ `
  query ListUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTenants = /* GraphQL */ `
  query SyncTenants(
    $filter: ModelTenantFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTenants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        facilityID
        name
        email
        phone
        licenseNumber
        licenseState
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getTenant = /* GraphQL */ `
  query GetTenant($id: ID!) {
    getTenant(id: $id) {
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
export const listTenants = /* GraphQL */ `
  query ListTenants(
    $filter: ModelTenantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        facilityID
        name
        email
        phone
        licenseNumber
        licenseState
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBoxes = /* GraphQL */ `
  query SyncBoxes(
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBoxes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBox = /* GraphQL */ `
  query GetBox($id: ID!) {
    getBox(id: $id) {
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
export const listBoxs = /* GraphQL */ `
  query ListBoxs(
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoxs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const tenantByEmail = /* GraphQL */ `
  query TenantByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelTenantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tenantByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        facilityID
        name
        email
        phone
        licenseNumber
        licenseState
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const boxesByTenant = /* GraphQL */ `
  query BoxesByTenant(
    $tenantID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    boxesByTenant(
      tenantID: $tenantID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const itemsByFacility = /* GraphQL */ `
  query ItemsByFacility(
    $facilityID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemsByFacility(
      facilityID: $facilityID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const itemsByUnit = /* GraphQL */ `
  query ItemsByUnit(
    $unitID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemsByUnit(
      unitID: $unitID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const ordersbyFacility = /* GraphQL */ `
  query OrdersbyFacility(
    $facilityID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersbyFacility(
      facilityID: $facilityID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
