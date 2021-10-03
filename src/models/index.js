// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Teacher, Parent } = initSchema(schema);

export {
  Teacher,
  Parent
};