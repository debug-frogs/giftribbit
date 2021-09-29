// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Classroom, Teacher, Parent } = initSchema(schema);

export {
  Classroom,
  Teacher,
  Parent
};