import {Avatar, Card, CardContent, CardHeader, Grid, IconButton, Typography} from "@mui/material";
import {createContext, Fragment, useState} from "react";
import theme from "../../../theme";
import DonationItemList from "./DonationItemList";
import {FaTimes} from 'react-icons/fa';
import {IoBagRemoveOutline} from 'react-icons/io5'

export const DonationContext = createContext({})

const Donation = ({donation}) => {
    const [removable, setRemovable] = useState(false)
    const sortedItems = donation?.items?.sort((a, b) => a.summary.localeCompare(b.summary))

    const handleClick = (event) => {
        removable ? setRemovable(false) : setRemovable(true)

    }

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
                    action={
                        <IconButton
                            size='small'
                            color={removable ? 'default' : 'secondary'}
                            onClick={handleClick}
                        >
                            {removable ? <FaTimes/> : <IoBagRemoveOutline/>}
                        </IconButton>
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
                            <DonationItemList items={sortedItems}/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </DonationContext.Provider>
    )
}

export default Donation;
