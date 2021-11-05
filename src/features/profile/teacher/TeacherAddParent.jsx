import {useContext, useState} from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";
import {ProfileContext} from "../../../pages/profile";
import {API} from "aws-amplify";
import axios from "../../../../lib/axios";


const TeacherAddParent = ({handleClose=()=>{}}) => {
    const [profile, setProfile] = useContext(ProfileContext)
    const {classroomID, id, Parents} = profile

    const [parentEmail, setParentEmail] = useState('')
    const [disabled, setDisabled] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisabled(true)

        try {
            const parentID = await API.post('fetchusersubapi', '/fetchusersub', {body: {email: parentEmail}})

            if (!Parents.find(c => c.id === parentID)) {

                const createDonationRes = await axios.post("/api/create/donation", {
                    classroomID: classroomID,
                    parentID: parentID,
                })

                const updateParentRes = await axios.patch("/api/update/parent", {
                    id: parentID,
                    teacherID: id
                })

                const fetchParentRes = await axios.get("/api/fetch/parent/" + parentID)

                const parentData = fetchParentRes.data

                const newProfile = {...profile}
                const newParents = Parents
                newParents.push(parentData)
                newProfile.Parents = newParents
                setProfile(newProfile)
            }
            else {
                console.log("Email not found")
            }
        }
        catch (error) {
            console.log(error)
        }
        finally {
            handleClose()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid
                container
                direction='column'
                spacing={4}
            >
                <Grid item>
                    <Typography
                        style={{ fontWeight: 600 }}
                        display='inline'
                    >
                        Invite a parent to join your classroom
                    </Typography>
                </Grid>
                <Grid item>
                    <TextField
                        required
                        fullWidth
                        label={'Enter a parents email'}
                        value={parentEmail}
                        onChange={
                            (event) => {
                                setParentEmail(event.target.value)
                            }}
                    />
                </Grid>
                <Grid item>
                    <Button
                        disabled={disabled}
                        fullWidth
                        variant='outlined'
                        color='secondary'
                        type='submit'
                    >
                        Add parent
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default TeacherAddParent;
