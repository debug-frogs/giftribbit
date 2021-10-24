import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DonationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ParentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClassroomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeacherMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Item {
  readonly id: string;
  readonly summary?: string;
  readonly url?: string;
  readonly classroomID?: string;
  readonly donationID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Item, ItemMetaData>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item, ItemMetaData>) => MutableModel<Item, ItemMetaData> | void): Item;
}

export declare class Donation {
  readonly id: string;
  readonly classroomID?: string;
  readonly Items?: (Item | null)[];
  readonly Parent?: Parent;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Donation, DonationMetaData>);
  static copyOf(source: Donation, mutator: (draft: MutableModel<Donation, DonationMetaData>) => MutableModel<Donation, DonationMetaData> | void): Donation;
}

export declare class Parent {
  readonly id: string;
  readonly email?: string;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly child?: string;
  readonly teacherID?: string;
  readonly classroomID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Parent, ParentMetaData>);
  static copyOf(source: Parent, mutator: (draft: MutableModel<Parent, ParentMetaData>) => MutableModel<Parent, ParentMetaData> | void): Parent;
}

export declare class Classroom {
  readonly id: string;
  readonly Parents?: (Parent | null)[];
  readonly Donations?: (Donation | null)[];
  readonly Items?: (Item | null)[];
  readonly Teacher?: Teacher;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Classroom, ClassroomMetaData>);
  static copyOf(source: Classroom, mutator: (draft: MutableModel<Classroom, ClassroomMetaData>) => MutableModel<Classroom, ClassroomMetaData> | void): Classroom;
}

export declare class Teacher {
  readonly id: string;
  readonly email?: string;
  readonly first_name?: string;
  readonly Parents?: (Parent | null)[];
  readonly last_name?: string;
  readonly school?: string;
  readonly classroomID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Teacher, TeacherMetaData>);
  static copyOf(source: Teacher, mutator: (draft: MutableModel<Teacher, TeacherMetaData>) => MutableModel<Teacher, TeacherMetaData> | void): Teacher;
}