/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
      id
      summary
      url
      classroomID
      donationID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
      id
      summary
      url
      classroomID
      donationID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
      id
      summary
      url
      classroomID
      donationID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDonation = /* GraphQL */ `
  subscription OnCreateDonation {
    onCreateDonation {
      id
      classroomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Items {
        items {
          id
          summary
          url
          classroomID
          donationID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateDonation = /* GraphQL */ `
  subscription OnUpdateDonation {
    onUpdateDonation {
      id
      classroomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Items {
        items {
          id
          summary
          url
          classroomID
          donationID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteDonation = /* GraphQL */ `
  subscription OnDeleteDonation {
    onDeleteDonation {
      id
      classroomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Items {
        items {
          id
          summary
          url
          classroomID
          donationID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateClassroom = /* GraphQL */ `
  subscription OnCreateClassroom {
    onCreateClassroom {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Items {
        items {
          id
          summary
          url
          classroomID
          donationID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Donations {
        items {
          id
          classroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Parents {
        items {
          id
          sub
          email
          first_name
          last_name
          child
          teacherID
          classroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateClassroom = /* GraphQL */ `
  subscription OnUpdateClassroom {
    onUpdateClassroom {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Items {
        items {
          id
          summary
          url
          classroomID
          donationID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Donations {
        items {
          id
          classroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Parents {
        items {
          id
          sub
          email
          first_name
          last_name
          child
          teacherID
          classroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteClassroom = /* GraphQL */ `
  subscription OnDeleteClassroom {
    onDeleteClassroom {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Items {
        items {
          id
          summary
          url
          classroomID
          donationID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Donations {
        items {
          id
          classroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Parents {
        items {
          id
          sub
          email
          first_name
          last_name
          child
          teacherID
          classroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher {
    onCreateTeacher {
      id
      sub
      email
      first_name
      last_name
      school
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Classroom {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Items {
          nextToken
          startedAt
        }
        Donations {
          nextToken
          startedAt
        }
        Parents {
          nextToken
          startedAt
        }
      }
      Parents {
        items {
          id
          sub
          email
          first_name
          last_name
          child
          teacherID
          classroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
      email
      first_name
      last_name
      school
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Classroom {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Items {
          nextToken
          startedAt
        }
        Donations {
          nextToken
          startedAt
        }
        Parents {
          nextToken
          startedAt
        }
      }
      Parents {
        items {
          id
          sub
          email
          first_name
          last_name
          child
          teacherID
          classroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
      email
      first_name
      last_name
      school
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Classroom {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Items {
          nextToken
          startedAt
        }
        Donations {
          nextToken
          startedAt
        }
        Parents {
          nextToken
          startedAt
        }
      }
      Parents {
        items {
          id
          sub
          email
          first_name
          last_name
          child
          teacherID
          classroomID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
      email
      first_name
      last_name
      child
      teacherID
      classroomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Donation {
        id
        classroomID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Items {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onUpdateParent = /* GraphQL */ `
  subscription OnUpdateParent {
    onUpdateParent {
      id
      sub
      email
      first_name
      last_name
      child
      teacherID
      classroomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Donation {
        id
        classroomID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Items {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onDeleteParent = /* GraphQL */ `
  subscription OnDeleteParent {
    onDeleteParent {
      id
      sub
      email
      first_name
      last_name
      child
      teacherID
      classroomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Donation {
        id
        classroomID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Items {
          nextToken
          startedAt
        }
      }
    }
  }
`;
