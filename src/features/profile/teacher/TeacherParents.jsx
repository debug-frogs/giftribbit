import {createContext, useState} from "react";
import TeacherParentOptions from "./TeacherParentOptions";
import TeacherParentList from "./TeacherParentList";

export const TeacherParentsContext = createContext({})

const TeacherParents = () => {
    const [removable, setRemovable] = useState(false)

    return (
        <TeacherParentsContext.Provider value={{
            removable: [removable, setRemovable]
        }}>
            <TeacherParentOptions />
            <TeacherParentList />
        </TeacherParentsContext.Provider>
    )
}

export default TeacherParents;
