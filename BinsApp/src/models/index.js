// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const BoxStatus = {
  "IN_STORAGE": "IN_STORAGE",
  "RETURNED": "RETURNED",
  "TO_PICKUP": "TO_PICKUP",
  "TO_DELIVER": "TO_DELIVER"
};

const JobType = {
  "PICKUP": "PICKUP",
  "DELIVERY": "DELIVERY"
};

const Status = {
  "COMPLETED": "COMPLETED",
  "INCOMPLETE": "INCOMPLETE"
};

const { Facility, Box, Tenant, Unit, Order, Address } = initSchema(schema);

export {
  Facility,
  Box,
  Tenant,
  Unit,
  Order,
  BoxStatus,
  JobType,
  Status,
  Address
};