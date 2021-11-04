import {useContext} from 'react';
import {ProfileContext} from "../../../pages/profile";
import {List, ListItem, ListItemText} from "@mui/material";
import hash from 'object-hash'


const TeacherParentList = () => {
    const [profile] = useContext(ProfileContext)
    const {Parents} = profile

    return (
        <List>
            {Parents.map( (parent, i) =>
                <ListItem
                    dense
                    key={hash(parent)+`${i}`}
                >
                    <ListItemText
                        primary={
                            `${parent.first_name} ${parent.last_name}`
                        }
                        secondary={
                            `parent of ${parent.child}`
                        }
                    />
                </ListItem>
            )}
        </List>
    )
};

export default TeacherParentList;
