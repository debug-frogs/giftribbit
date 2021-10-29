import Item from "../Item";
import hash from 'object-hash'
import {Avatar, Card, CardContent, CardHeader, Grid, List} from "@mui/material";
import {createContext, useState} from "react";

export const DonationContext = createContext({})

const Donation = ({donation}) => {
    const [removable, setRemovable] = useState(false)

    return (
        <DonationContext.Provider value={{
            removable: [removable, setRemovable]
        }}>
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
                                        removable={removable}
                                    />
                                )}
                            </List>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </DonationContext.Provider>
    )
}

export default Donation;
