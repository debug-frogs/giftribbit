import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ClassroomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeacherMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ParentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Classroom {
  readonly id: string;
  readonly teacher?: Teacher;
  readonly parents?: (Parent | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Classroom, ClassroomMetaData>);
  static copyOf(source: Classroom, mutator: (draft: MutableModel<Classroom, ClassroomMetaData>) => MutableModel<Classroom, ClassroomMetaData> | void): Classroom;
}

export declare class Teacher {
  readonly id: string;
  readonly email?: string;
  readonly last_name?: string;
  readonly school?: string;
  readonly first_name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Teacher, TeacherMetaData>);
  static copyOf(source: Teacher, mutator: (draft: MutableModel<Teacher, TeacherMetaData>) => MutableModel<Teacher, TeacherMetaData> | void): Teacher;
}

export declare class Parent {
  readonly id: string;
  readonly email?: string;
  readonly last_name?: string;
  readonly first_name?: string;
  readonly child?: string;
  readonly classroomID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Parent, ParentMetaData>);
  static copyOf(source: Parent, mutator: (draft: MutableModel<Parent, ParentMetaData>) => MutableModel<Parent, ParentMetaData> | void): Parent;
}