/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher {
    onCreateTeacher {
      id
      sub
      first_name
      last_name
      school
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Parents {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher {
    onUpdateTeacher {
      id
      sub
      first_name
      last_name
      school
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Parents {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher {
    onDeleteTeacher {
      id
      sub
      first_name
      last_name
      school
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Parents {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateParent = /* GraphQL */ `
  subscription OnCreateParent {
    onCreateParent {
      id
      sub
      first_name
      last_name
      child
      teacherID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateParent = /* GraphQL */ `
  subscription OnUpdateParent {
    onUpdateParent {
      id
      sub
      first_name
      last_name
      child
      teacherID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteParent = /* GraphQL */ `
  subscription OnDeleteParent {
    onDeleteParent {
      id
      sub
      first_name
      last_name
      child
      teacherID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
