import React, {useContext} from 'react';
import {ProfileContext} from "../../../pages/profile";
import {Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import hash from 'object-hash'
import {RiParentLine} from 'react-icons/ri'


const ParentsList = () => {
    const [profile] = useContext(ProfileContext)
    const {Parents} = profile

    return (
        <List>
            {Parents.map( (parent) =>
                <ListItem
                    dense
                    key={hash(parent)}
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

export default ParentsList;
