import Item from "../Item/Item";
import hash from 'object-hash'
import {Avatar, Card, CardContent, CardHeader, Grid, List, Typography} from "@mui/material";
import {createContext, Fragment, useState} from "react";
import theme from "../../../theme";

export const DonationContext = createContext({})

const Donation = ({donation}) => {
    const [removable, setRemovable] = useState(false)
    const sortedItems = donation?.items?.sort((a, b) => a.summary.localeCompare(b.summary))

    return (
        <DonationContext.Provider value={{
            removable: [removable, setRemovable]
        }}>
            <Card elevation={1}>
                <CardHeader
                    avatar={
                        <Avatar
                            sx={{ bgcolor: theme.palette.primary.main }}
                        >
                            {donation?.Parent?.first_name[0] + donation?.Parent?.last_name[0]}
                        </Avatar>
                    }
                    subheader={
                        <Fragment>
                            <Typography
                                variant='caption'
                            >
                                Donations from
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                color='primary'
                            >
                                {donation?.Parent?.first_name} {donation?.Parent?.last_name}
                            </Typography>
                        </Fragment>
                    }
                />
                <CardContent>
                    <Grid
                        container
                        direction='column'
                    >
                        <Grid item>
                            <List dense>
                                {sortedItems?.map(item =>
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
