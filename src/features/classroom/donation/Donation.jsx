import Item from "../item";
import hash from 'object-hash'
import {Avatar, Card, CardContent, CardHeader, Grid, List} from "@mui/material";

const Donation = ({donation}) => {
    return (
        <Card elevation={1}>
            <CardHeader
                avatar={
                    <Avatar>
                        {donation?.Parent?.first_name[0] + donation?.Parent?.last_name[0]}
                    </Avatar>
                }
                subheader={`from ${donation?.Parent?.first_name} ${donation?.Parent?.last_name}`}
            />
            <CardContent>
                <Grid
                    container
                    direction='column'
                >
                    <Grid item>
                        <List dense>
                            {donation?.items?.map(item =>
                                <Item
                                    key={hash(item)}
                                    item={item}
                                />
                            )}
                        </List>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Donation;
