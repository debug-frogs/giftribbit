/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
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
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncItems = /* GraphQL */ `
  query SyncItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getDonation = /* GraphQL */ `
  query GetDonation($id: ID!) {
    getDonation(id: $id) {
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
export const listDonations = /* GraphQL */ `
  query ListDonations(
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncDonations = /* GraphQL */ `
  query SyncDonations(
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDonations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getClassroom = /* GraphQL */ `
  query GetClassroom($id: ID!) {
    getClassroom(id: $id) {
      id
      imageID
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
export const listClassrooms = /* GraphQL */ `
  query ListClassrooms(
    $filter: ModelClassroomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClassrooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageID
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
      nextToken
      startedAt
    }
  }
`;
export const syncClassrooms = /* GraphQL */ `
  query SyncClassrooms(
    $filter: ModelClassroomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClassrooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        imageID
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
      nextToken
      startedAt
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
      id
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
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
      nextToken
      startedAt
    }
  }
`;
export const syncTeachers = /* GraphQL */ `
  query SyncTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeachers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
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
      nextToken
      startedAt
    }
  }
`;
export const getParent = /* GraphQL */ `
  query GetParent($id: ID!) {
    getParent(id: $id) {
      id
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
export const listParents = /* GraphQL */ `
  query ListParents(
    $filter: ModelParentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
`;
export const syncParents = /* GraphQL */ `
  query SyncParents(
    $filter: ModelParentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncParents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
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
`;
