import Item from "../item";
import hash from 'object-hash'
import {Avatar, Card, CardContent, CardHeader, Grid, List} from "@mui/material";

const Donation = ({donation}) => {
    return (
        <Card elevation={1}>
            <CardHeader
                avatar={
                    <Avatar>
                        {donation?.author?.name[0]}
                    </Avatar>
                }
                subheader={`from ${donation?.author?.name}`}
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
