import {Grid} from "@mui/material";
import {useContext} from "react";
import {ClassroomContext} from "../../../pages/classroom/[id]";
import Donation from "./Donation";
import hash from "object-hash";

const DonationsContainer = () => {
    const [classroom] = useContext(ClassroomContext)
    const {Donations} = classroom

    return (
        <Grid
            container
            direction='column'
            spacing={4}
        >
            {Donations?.map( (donation, index) =>
                <Grid
                    key={hash(donation)}
                    item
                >
                    <Donation
                        donation={donation}
                        index={index}
                    />
                </Grid>
            )}
        </Grid>
    );
};

export default DonationsContainer;
