// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Item, Donation, Classroom, Teacher, Parent } = initSchema(schema);

export {
  Item,
  Donation,
  Classroom,
  Teacher,
  Parent
};