// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Item, Donation, Classroom, Parent, Teacher } = initSchema(schema);

export {
  Item,
  Donation,
  Classroom,
  Parent,
  Teacher
};