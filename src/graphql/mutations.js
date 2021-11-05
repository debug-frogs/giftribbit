/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
export const createDonation = /* GraphQL */ `
  mutation CreateDonation(
    $input: CreateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    createDonation(input: $input, condition: $condition) {
      id
      classroomID
      parentID
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
    }
  }
`;
export const updateDonation = /* GraphQL */ `
  mutation UpdateDonation(
    $input: UpdateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    updateDonation(input: $input, condition: $condition) {
      id
      classroomID
      parentID
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
    }
  }
`;
export const deleteDonation = /* GraphQL */ `
  mutation DeleteDonation(
    $input: DeleteDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    deleteDonation(input: $input, condition: $condition) {
      id
      classroomID
      parentID
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
    }
  }
`;
export const createClassroom = /* GraphQL */ `
  mutation CreateClassroom(
    $input: CreateClassroomInput!
    $condition: ModelClassroomConditionInput
  ) {
    createClassroom(input: $input, condition: $condition) {
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
          parentID
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
        TeacherParents {
          items {
            id
            teacherID
            parentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            teacher {
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
              TeacherParents {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
            parent {
              id
              first_name
              last_name
              child
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              Donations {
                items {
                  id
                  classroomID
                  parentID
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
                }
                nextToken
                startedAt
              }
              teachers {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateClassroom = /* GraphQL */ `
  mutation UpdateClassroom(
    $input: UpdateClassroomInput!
    $condition: ModelClassroomConditionInput
  ) {
    updateClassroom(input: $input, condition: $condition) {
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
          parentID
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
        TeacherParents {
          items {
            id
            teacherID
            parentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            teacher {
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
              TeacherParents {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
            parent {
              id
              first_name
              last_name
              child
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              Donations {
                items {
                  id
                  classroomID
                  parentID
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
                }
                nextToken
                startedAt
              }
              teachers {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteClassroom = /* GraphQL */ `
  mutation DeleteClassroom(
    $input: DeleteClassroomInput!
    $condition: ModelClassroomConditionInput
  ) {
    deleteClassroom(input: $input, condition: $condition) {
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
          parentID
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
        TeacherParents {
          items {
            id
            teacherID
            parentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            teacher {
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
              TeacherParents {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
            parent {
              id
              first_name
              last_name
              child
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              Donations {
                items {
                  id
                  classroomID
                  parentID
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
                }
                nextToken
                startedAt
              }
              teachers {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
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
      TeacherParents {
        items {
          id
          teacherID
          parentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          teacher {
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
            TeacherParents {
              items {
                id
                teacherID
                parentID
                _version
                _deleted
                _lastChangedAt
                createdAt
                updatedAt
                teacher {
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
                  TeacherParents {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
                parent {
                  id
                  first_name
                  last_name
                  child
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  Donations {
                    items {
                      id
                      classroomID
                      parentID
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
                    nextToken
                    startedAt
                  }
                  teachers {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
              }
              nextToken
              startedAt
            }
          }
          parent {
            id
            first_name
            last_name
            child
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            Donations {
              items {
                id
                classroomID
                parentID
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
              }
              nextToken
              startedAt
            }
            teachers {
              items {
                id
                teacherID
                parentID
                _version
                _deleted
                _lastChangedAt
                createdAt
                updatedAt
                teacher {
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
                  TeacherParents {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
                parent {
                  id
                  first_name
                  last_name
                  child
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  Donations {
                    items {
                      id
                      classroomID
                      parentID
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
                    nextToken
                    startedAt
                  }
                  teachers {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
              }
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
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
      TeacherParents {
        items {
          id
          teacherID
          parentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          teacher {
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
            TeacherParents {
              items {
                id
                teacherID
                parentID
                _version
                _deleted
                _lastChangedAt
                createdAt
                updatedAt
                teacher {
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
                  TeacherParents {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
                parent {
                  id
                  first_name
                  last_name
                  child
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  Donations {
                    items {
                      id
                      classroomID
                      parentID
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
                    nextToken
                    startedAt
                  }
                  teachers {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
              }
              nextToken
              startedAt
            }
          }
          parent {
            id
            first_name
            last_name
            child
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            Donations {
              items {
                id
                classroomID
                parentID
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
              }
              nextToken
              startedAt
            }
            teachers {
              items {
                id
                teacherID
                parentID
                _version
                _deleted
                _lastChangedAt
                createdAt
                updatedAt
                teacher {
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
                  TeacherParents {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
                parent {
                  id
                  first_name
                  last_name
                  child
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  Donations {
                    items {
                      id
                      classroomID
                      parentID
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
                    nextToken
                    startedAt
                  }
                  teachers {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
              }
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
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
      TeacherParents {
        items {
          id
          teacherID
          parentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          teacher {
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
            TeacherParents {
              items {
                id
                teacherID
                parentID
                _version
                _deleted
                _lastChangedAt
                createdAt
                updatedAt
                teacher {
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
                  TeacherParents {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
                parent {
                  id
                  first_name
                  last_name
                  child
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  Donations {
                    items {
                      id
                      classroomID
                      parentID
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
                    nextToken
                    startedAt
                  }
                  teachers {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
              }
              nextToken
              startedAt
            }
          }
          parent {
            id
            first_name
            last_name
            child
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            Donations {
              items {
                id
                classroomID
                parentID
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
              }
              nextToken
              startedAt
            }
            teachers {
              items {
                id
                teacherID
                parentID
                _version
                _deleted
                _lastChangedAt
                createdAt
                updatedAt
                teacher {
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
                  TeacherParents {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
                parent {
                  id
                  first_name
                  last_name
                  child
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  Donations {
                    items {
                      id
                      classroomID
                      parentID
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
                    nextToken
                    startedAt
                  }
                  teachers {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
              }
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createParent = /* GraphQL */ `
  mutation CreateParent(
    $input: CreateParentInput!
    $condition: ModelParentConditionInput
  ) {
    createParent(input: $input, condition: $condition) {
      id
      first_name
      last_name
      child
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Donations {
        items {
          id
          classroomID
          parentID
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
        }
        nextToken
        startedAt
      }
      teachers {
        items {
          id
          teacherID
          parentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          teacher {
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
            TeacherParents {
              items {
                id
                teacherID
                parentID
                _version
                _deleted
                _lastChangedAt
                createdAt
                updatedAt
                teacher {
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
                  TeacherParents {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
                parent {
                  id
                  first_name
                  last_name
                  child
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  Donations {
                    items {
                      id
                      classroomID
                      parentID
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
                    nextToken
                    startedAt
                  }
                  teachers {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
              }
              nextToken
              startedAt
            }
          }
          parent {
            id
            first_name
            last_name
            child
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            Donations {
              items {
                id
                classroomID
                parentID
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
              }
              nextToken
              startedAt
            }
            teachers {
              items {
                id
                teacherID
                parentID
                _version
                _deleted
                _lastChangedAt
                createdAt
                updatedAt
                teacher {
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
                  TeacherParents {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
                parent {
                  id
                  first_name
                  last_name
                  child
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  Donations {
                    items {
                      id
                      classroomID
                      parentID
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
                    nextToken
                    startedAt
                  }
                  teachers {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
              }
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateParent = /* GraphQL */ `
  mutation UpdateParent(
    $input: UpdateParentInput!
    $condition: ModelParentConditionInput
  ) {
    updateParent(input: $input, condition: $condition) {
      id
      first_name
      last_name
      child
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Donations {
        items {
          id
          classroomID
          parentID
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
        }
        nextToken
        startedAt
      }
      teachers {
        items {
          id
          teacherID
          parentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          teacher {
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
            TeacherParents {
              items {
                id
                teacherID
                parentID
                _version
                _deleted
                _lastChangedAt
                createdAt
                updatedAt
                teacher {
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
                  TeacherParents {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
                parent {
                  id
                  first_name
                  last_name
                  child
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  Donations {
                    items {
                      id
                      classroomID
                      parentID
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
                    nextToken
                    startedAt
                  }
                  teachers {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
              }
              nextToken
              startedAt
            }
          }
          parent {
            id
            first_name
            last_name
            child
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            Donations {
              items {
                id
                classroomID
                parentID
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
              }
              nextToken
              startedAt
            }
            teachers {
              items {
                id
                teacherID
                parentID
                _version
                _deleted
                _lastChangedAt
                createdAt
                updatedAt
                teacher {
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
                  TeacherParents {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
                parent {
                  id
                  first_name
                  last_name
                  child
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  Donations {
                    items {
                      id
                      classroomID
                      parentID
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
                    nextToken
                    startedAt
                  }
                  teachers {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
              }
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteParent = /* GraphQL */ `
  mutation DeleteParent(
    $input: DeleteParentInput!
    $condition: ModelParentConditionInput
  ) {
    deleteParent(input: $input, condition: $condition) {
      id
      first_name
      last_name
      child
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Donations {
        items {
          id
          classroomID
          parentID
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
        }
        nextToken
        startedAt
      }
      teachers {
        items {
          id
          teacherID
          parentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          teacher {
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
            TeacherParents {
              items {
                id
                teacherID
                parentID
                _version
                _deleted
                _lastChangedAt
                createdAt
                updatedAt
                teacher {
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
                  TeacherParents {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
                parent {
                  id
                  first_name
                  last_name
                  child
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  Donations {
                    items {
                      id
                      classroomID
                      parentID
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
                    nextToken
                    startedAt
                  }
                  teachers {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
              }
              nextToken
              startedAt
            }
          }
          parent {
            id
            first_name
            last_name
            child
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            Donations {
              items {
                id
                classroomID
                parentID
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
              }
              nextToken
              startedAt
            }
            teachers {
              items {
                id
                teacherID
                parentID
                _version
                _deleted
                _lastChangedAt
                createdAt
                updatedAt
                teacher {
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
                  TeacherParents {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
                parent {
                  id
                  first_name
                  last_name
                  child
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  Donations {
                    items {
                      id
                      classroomID
                      parentID
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
                    nextToken
                    startedAt
                  }
                  teachers {
                    items {
                      id
                      teacherID
                      parentID
                      _version
                      _deleted
                      _lastChangedAt
                      createdAt
                      updatedAt
                      teacher {
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
                      }
                      parent {
                        id
                        first_name
                        last_name
                        child
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
              }
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createTeacherParent = /* GraphQL */ `
  mutation CreateTeacherParent(
    $input: CreateTeacherParentInput!
    $condition: ModelTeacherParentConditionInput
  ) {
    createTeacherParent(input: $input, condition: $condition) {
      id
      teacherID
      parentID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      teacher {
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
        TeacherParents {
          items {
            id
            teacherID
            parentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            teacher {
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
              TeacherParents {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
            parent {
              id
              first_name
              last_name
              child
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              Donations {
                items {
                  id
                  classroomID
                  parentID
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
                }
                nextToken
                startedAt
              }
              teachers {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
          }
          nextToken
          startedAt
        }
      }
      parent {
        id
        first_name
        last_name
        child
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Donations {
          items {
            id
            classroomID
            parentID
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
          }
          nextToken
          startedAt
        }
        teachers {
          items {
            id
            teacherID
            parentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            teacher {
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
              TeacherParents {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
            parent {
              id
              first_name
              last_name
              child
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              Donations {
                items {
                  id
                  classroomID
                  parentID
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
                }
                nextToken
                startedAt
              }
              teachers {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateTeacherParent = /* GraphQL */ `
  mutation UpdateTeacherParent(
    $input: UpdateTeacherParentInput!
    $condition: ModelTeacherParentConditionInput
  ) {
    updateTeacherParent(input: $input, condition: $condition) {
      id
      teacherID
      parentID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      teacher {
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
        TeacherParents {
          items {
            id
            teacherID
            parentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            teacher {
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
              TeacherParents {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
            parent {
              id
              first_name
              last_name
              child
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              Donations {
                items {
                  id
                  classroomID
                  parentID
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
                }
                nextToken
                startedAt
              }
              teachers {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
          }
          nextToken
          startedAt
        }
      }
      parent {
        id
        first_name
        last_name
        child
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Donations {
          items {
            id
            classroomID
            parentID
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
          }
          nextToken
          startedAt
        }
        teachers {
          items {
            id
            teacherID
            parentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            teacher {
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
              TeacherParents {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
            parent {
              id
              first_name
              last_name
              child
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              Donations {
                items {
                  id
                  classroomID
                  parentID
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
                }
                nextToken
                startedAt
              }
              teachers {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteTeacherParent = /* GraphQL */ `
  mutation DeleteTeacherParent(
    $input: DeleteTeacherParentInput!
    $condition: ModelTeacherParentConditionInput
  ) {
    deleteTeacherParent(input: $input, condition: $condition) {
      id
      teacherID
      parentID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      teacher {
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
        TeacherParents {
          items {
            id
            teacherID
            parentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            teacher {
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
              TeacherParents {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
            parent {
              id
              first_name
              last_name
              child
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              Donations {
                items {
                  id
                  classroomID
                  parentID
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
                }
                nextToken
                startedAt
              }
              teachers {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
          }
          nextToken
          startedAt
        }
      }
      parent {
        id
        first_name
        last_name
        child
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Donations {
          items {
            id
            classroomID
            parentID
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
          }
          nextToken
          startedAt
        }
        teachers {
          items {
            id
            teacherID
            parentID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            teacher {
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
              TeacherParents {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
            parent {
              id
              first_name
              last_name
              child
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              Donations {
                items {
                  id
                  classroomID
                  parentID
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
                }
                nextToken
                startedAt
              }
              teachers {
                items {
                  id
                  teacherID
                  parentID
                  _version
                  _deleted
                  _lastChangedAt
                  createdAt
                  updatedAt
                  teacher {
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
                    TeacherParents {
                      items {
                        id
                        teacherID
                        parentID
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
                  parent {
                    id
                    first_name
                    last_name
                    child
                    _version
                    _deleted
                    _lastChangedAt
                    createdAt
                    updatedAt
                    Donations {
                      items {
                        id
                        classroomID
                        parentID
                        _version
                        _deleted
                        _lastChangedAt
                        createdAt
                        updatedAt
                      }
                      nextToken
                      startedAt
                    }
                    teachers {
                      items {
                        id
                        teacherID
                        parentID
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
                nextToken
                startedAt
              }
            }
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
