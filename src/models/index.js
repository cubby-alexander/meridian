// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Module, User, Client } = initSchema(schema);

export {
  Module,
  User,
  Client
};