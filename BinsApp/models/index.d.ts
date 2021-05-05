import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum BoxStatus {
  IN_STORAGE = "IN_STORAGE",
  RETURNED = "RETURNED",
  TO_PICKUP = "TO_PICKUP",
  TO_DELIVER = "TO_DELIVER"
}

export enum JobType {
  PICKUP = "PICKUP",
  DELIVERY = "DELIVERY"
}

export enum Status {
  COMPLETED = "COMPLETED",
  INCOMPLETE = "INCOMPLETE"
}

export declare class Address {
  readonly id: string;
  readonly tenantID?: string;
  readonly streetAddress?: string;
  readonly building?: string;
  readonly city?: string;
  readonly state?: string;
  readonly zip?: number;
  readonly parking?: string;
  constructor(init: ModelInit<Address>);
}

export declare class Facility {
  readonly id: string;
  readonly name?: string;
  readonly address?: string;
  readonly boxes?: (Box | null)[];
  readonly customers?: (Tenant | null)[];
  readonly orders?: (Order | null)[];
  readonly units?: (Unit | null)[];
  constructor(init: ModelInit<Facility>);
  static copyOf(source: Facility, mutator: (draft: MutableModel<Facility>) => MutableModel<Facility> | void): Facility;
}

export declare class Box {
  readonly id: string;
  readonly tenantID: string;
  readonly facilityID: string;
  readonly unitID?: string;
  readonly description?: string;
  readonly status?: BoxStatus | keyof typeof BoxStatus;
  readonly photo?: string;
  readonly location?: string;
  constructor(init: ModelInit<Box>);
  static copyOf(source: Box, mutator: (draft: MutableModel<Box>) => MutableModel<Box> | void): Box;
}

export declare class Tenant {
  readonly id: string;
  readonly facilityID: string;
  readonly name?: string;
  readonly email: string;
  readonly phone?: string;
  readonly unit?: Unit;
  readonly address?: (Address | null)[];
  readonly licenseNumber?: string;
  readonly licenseState?: string;
  readonly orders?: (Order | null)[];
  readonly boxes?: (Box | null)[];
  constructor(init: ModelInit<Tenant>);
  static copyOf(source: Tenant, mutator: (draft: MutableModel<Tenant>) => MutableModel<Tenant> | void): Tenant;
}

export declare class Unit {
  readonly id: string;
  readonly facilityID: string;
  readonly size?: string;
  readonly usage?: string;
  readonly boxes?: (Box | null)[];
  constructor(init: ModelInit<Unit>);
  static copyOf(source: Unit, mutator: (draft: MutableModel<Unit>) => MutableModel<Unit> | void): Unit;
}

export declare class Order {
  readonly id: string;
  readonly tenantID: string;
  readonly facilityID: string;
  readonly date?: string;
  readonly time?: string;
  readonly address?: string;
  readonly jobType?: JobType | keyof typeof JobType;
  readonly status?: Status | keyof typeof Status;
  constructor(init: ModelInit<Order>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}