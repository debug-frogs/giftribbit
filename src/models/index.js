// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Item, Donation, Parent, Classroom, Teacher } = initSchema(schema);

export {
  Item,
  Donation,
  Parent,
  Classroom,
  Teacher
};