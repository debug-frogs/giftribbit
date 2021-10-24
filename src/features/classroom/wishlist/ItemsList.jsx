import React from 'react';
import {Box, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import hash from "object-hash";
import BackspaceIcon from "@mui/icons-material/Backspace";
import {FaGift} from "react-icons/fa";

const ItemsList = ({items = [], setItems = () => {}}) => {
    if (items.length > 0) {
        return (
            <Grid item>
                <Box width='320px'>
                    <List dense>
                        {items?.map((item, i) =>
                            <ListItem
                                divider
                                style={{margin: '16px 0'}}
                                key={hash(item)}
                                secondaryAction={
                                    <IconButton
                                        color='secondary'
                                        onClick={() => {
                                            let filtered_items = items.filter(i => i.key !== item.key)
                                            setItems(filtered_items)
                                        }}
                                    >
                                        <BackspaceIcon/>
                                    </IconButton>
                                }
                            >
                                <ListItemIcon
                                    style={{minWidth: '32px'}}
                                >
                                    <FaGift />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography noWrap>
                                            {item?.summary}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography
                                            noWrap
                                            variant='caption'
                                        >
                                            {item?.url}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        )}
                    </List>
                </Box>
            </Grid>
        )
    }
    else {
        return null
    }
}

export default ItemsList;
