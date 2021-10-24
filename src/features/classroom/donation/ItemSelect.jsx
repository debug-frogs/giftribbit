import hash from "object-hash";
import {Checkbox, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {useContext} from "react";
import {ClassroomContext} from "../../../pages/classroom/[id]";

const ItemSelect = () => {
    const [classroom] = useContext(ClassroomContext)
    const {Items} = classroom

    return (
        <Grid
            container
            direction='column'
            spacing={2}
        >
            <Grid item>
                <Typography
                    variant='h5'
                >
                    Wishlist Items
                </Typography>
            </Grid>
            <Grid item>
                <Typography >
                    Choose which item or items you have purchased from the Wishlist.
                </Typography>
            </Grid>
            <Grid item>
                <List dense>
                    { Items?.map((item) =>
                        <ListItem
                            key={hash({...item})}
                            disablePadding
                            divider
                        >
                            <ListItemIcon>
                                <Checkbox/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant='subtitle2'
                                    >
                                        {item?.summary}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    )}
                </List>
            </Grid>
        </Grid>
    );
};

export default ItemSelect;
