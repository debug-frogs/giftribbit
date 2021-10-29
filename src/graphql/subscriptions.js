/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
      id
      description
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
      description
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
      description
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
          description
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
      Parent {
        id
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
          description
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
      Parent {
        id
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
          description
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
      Parent {
        id
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
          description
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
          Items {
            items {
              id
              description
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
          Parent {
            id
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
        }
        nextToken
        startedAt
      }
      Teacher {
        id
        email
        first_name
        last_name
        school
        classroomID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Parents {
          items {
            id
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
      Parents {
        items {
          id
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
          description
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
          Items {
            items {
              id
              description
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
          Parent {
            id
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
        }
        nextToken
        startedAt
      }
      Teacher {
        id
        email
        first_name
        last_name
        school
        classroomID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Parents {
          items {
            id
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
      Parents {
        items {
          id
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
          description
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
          Items {
            items {
              id
              description
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
          Parent {
            id
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
        }
        nextToken
        startedAt
      }
      Teacher {
        id
        email
        first_name
        last_name
        school
        classroomID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Parents {
          items {
            id
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
      Parents {
        items {
          id
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
      email
      first_name
      last_name
      school
      classroomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Parents {
        items {
          id
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
      email
      first_name
      last_name
      school
      classroomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Parents {
        items {
          id
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
      email
      first_name
      last_name
      school
      classroomID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Parents {
        items {
          id
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
  }
`;
export const onUpdateParent = /* GraphQL */ `
  subscription OnUpdateParent {
    onUpdateParent {
      id
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
  }
`;
export const onDeleteParent = /* GraphQL */ `
  subscription OnDeleteParent {
    onDeleteParent {
      id
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
  }
`;
