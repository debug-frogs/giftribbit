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
export const onUpdateDonation = /* GraphQL */ `
  subscription OnUpdateDonation {
    onUpdateDonation {
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
export const onDeleteDonation = /* GraphQL */ `
  subscription OnDeleteDonation {
    onDeleteDonation {
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
export const onCreateClassroom = /* GraphQL */ `
  subscription OnCreateClassroom {
    onCreateClassroom {
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
export const onUpdateClassroom = /* GraphQL */ `
  subscription OnUpdateClassroom {
    onUpdateClassroom {
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
export const onDeleteClassroom = /* GraphQL */ `
  subscription OnDeleteClassroom {
    onDeleteClassroom {
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher {
    onCreateTeacher {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher {
    onUpdateTeacher {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher {
    onDeleteTeacher {
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
export const onCreateParent = /* GraphQL */ `
  subscription OnCreateParent {
    onCreateParent {
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
export const onUpdateParent = /* GraphQL */ `
  subscription OnUpdateParent {
    onUpdateParent {
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
export const onDeleteParent = /* GraphQL */ `
  subscription OnDeleteParent {
    onDeleteParent {
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
export const onCreateTeacherParent = /* GraphQL */ `
  subscription OnCreateTeacherParent {
    onCreateTeacherParent {
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
export const onUpdateTeacherParent = /* GraphQL */ `
  subscription OnUpdateTeacherParent {
    onUpdateTeacherParent {
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
export const onDeleteTeacherParent = /* GraphQL */ `
  subscription OnDeleteTeacherParent {
    onDeleteTeacherParent {
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
