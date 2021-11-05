import React, {useContext, useState} from 'react';
import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import {ProfileContext} from "../../../pages/profile";
import {TeacherParentsContext} from "./TeacherParents";
import axios from "../../../../lib/axios";


const TeacherRemoveParent = ({parent, handleModalClose}) => {
    const [profile, setProfile] = useContext(ProfileContext)
    const [removable, setRemovable] = useContext(TeacherParentsContext).removable

    const [disabled, setDisabled] = useState(false)

    const handleRemoveItem = async () => {
        setDisabled(true)

        try {
            const donationID = parent.Donations.find( c => c.classroomID === profile.classroomID).id

            if (donationID) {
                await axios.delete('api/delete/donation/' + donationID)
                const newProfile = {...profile}
                newProfile.Parents = newProfile.Parents.filter(c => c.id !== parent.id)
                setProfile(newProfile)
            }
        }
        finally {
            setRemovable(false)
            handleModalClose()
        }
    }

    return (
        <Paper>
            <Box
                width='320px'
                p={5}
            >
                <Grid
                    container
                    direction='column'
                    spacing={3}
                >
                    <Grid item>
                        <Typography
                            style={{ fontWeight: 600 }}
                            display='inline'
                        >
                            Remove {parent.first_name} {parent.last_name} from the classroom?
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant='caption'
                        >
                            You will also remove any Gift Donations made by {parent.first_name}.
                            This action cannot be undone!
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            fullWidth
                            disabled={disabled}
                            type='submit'
                            variant='contained'
                            color='secondary'
                            onClick={handleRemoveItem}
                        >
                            Remove Parent
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}

export default TeacherRemoveParent;
