import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TeacherMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ParentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Teacher {
  readonly id: string;
  readonly sub: string;
  readonly email?: string;
  readonly first_name?: string;
  readonly Parents?: (Parent | null)[];
  readonly last_name?: string;
  readonly school?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Teacher, TeacherMetaData>);
  static copyOf(source: Teacher, mutator: (draft: MutableModel<Teacher, TeacherMetaData>) => MutableModel<Teacher, TeacherMetaData> | void): Teacher;
}

export declare class Parent {
  readonly id: string;
  readonly sub?: string;
  readonly email?: string;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly child?: string;
  readonly teacherID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Parent, ParentMetaData>);
  static copyOf(source: Parent, mutator: (draft: MutableModel<Parent, ParentMetaData>) => MutableModel<Parent, ParentMetaData> | void): Parent;
}