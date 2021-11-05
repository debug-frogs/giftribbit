import {Grid} from "@mui/material";
import {memo, useContext} from "react";
import {ClassroomContext} from "../../../pages/classroom/[id]";
import Donation from "./Donation";
import hash from "object-hash";

const DonationList = memo(() => {
    const [classroom] = useContext(ClassroomContext)
    const {Donations} = classroom

    return (
        <Grid
            container
            direction='column'
            spacing={4}
        >
            {Donations?.map( (donation) =>
                <Grid
                    key={hash(donation)}
                    item
                >
                    {donation.items.length > 0 &&
                        <Donation donation={donation}/>
                    }
                </Grid>
            )}
        </Grid>
    )
})

export default DonationList;
