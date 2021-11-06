import {useContext, useState} from 'react';
import {Grid, IconButton, TextField, Typography} from "@mui/material";
import {ProfileContext} from "../../../pages/profile";
import {FaRegCheckCircle} from "react-icons/fa";
import axios from "../../../../lib/axios";


const TeacherInfo = () => {
    const [profile, setProfile] = useContext(ProfileContext)
    const {first_name, last_name, email, child} = profile

    const [firstName, setFirstName] = useState(first_name)
    const [firstNameIsLoading, setFirstNameIsLoading] = useState(false)
    const [firstNameIsEdited, setFirstNameIsEdited] = useState(false)
    const [lastName, setLastName] = useState(last_name)
    const [lastNameIsLoading, setLastNameIsLoading] = useState(false)
    const [lastNameIsEdited, setLastNameIsEdited] = useState(false)
    const [childName, setChildName] = useState(child)
    const [childNameIsLoading, setChildNameIsLoading] = useState(false)
    const [childNameIsEdited, setChildNameIsEdited] = useState(false)

    const handleSetFirstName = async () => {
        try {
            setFirstNameIsLoading(true)
            const updateParentRes = await axios.patch('/api/update/parent', {
                id: profile.id,
                first_name: firstName
            })
            const newProfile = {...profile}
            newProfile.first_name = firstName
            setProfile(newProfile)
        } finally {
            setFirstNameIsLoading(false)
            setFirstNameIsEdited(false)
        }
    }

    const handleSetLastName = async () => {
        try {
            setLastNameIsLoading(true)
            const updateParentRes = await axios.patch('/api/update/parent', {
                id: profile.id,
                last_name: lastName
            })
            const newProfile = {...profile}
            newProfile.last_name = lastName
            setProfile(newProfile)
        }
        finally {
            setLastNameIsLoading(false)
            setLastNameIsEdited(false)
        }
    }

    const handleSetChildName = async () => {
        try {
            setChildNameIsLoading(true)
            const updateParentRes = await axios.patch('/api/update/parent', {
                id: profile.id,
                child: childName
            })
            const newProfile = {...profile}
            newProfile.childName = childName
            setProfile(newProfile)
        }
        finally {
            setChildNameIsLoading(false)
            setChildNameIsEdited(false)
        }
    }

    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            spacing={2}
        >
            <Grid item>
                <Grid
                    container
                    spacing={1}
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Grid item>
                        <Grid
                            container
                            spacing={1}
                            alignItems='center'
                        >
                            <Grid item>
                                <Typography
                                    display='inline'
                                    color='primary'
                                    style={{ fontWeight: 600 }}
                                >
                                    First Name:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    sx={{marginBottom: -0.5}}
                                    size='small'
                                    variant='standard'
                                    value={firstName}
                                    onChange={e => {
                                        const c = e.target.value
                                        setFirstName(c)
                                        c !== first_name && c.length ?
                                            setFirstNameIsEdited(true)
                                            : setFirstNameIsEdited(false)
                                    }}
                                    InputProps={{ disableUnderline: true }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        {firstNameIsEdited &&
                            <IconButton
                                disabled={firstNameIsLoading}
                                size='small'
                                color='secondary'
                                onClick={handleSetFirstName}
                            >
                                <FaRegCheckCircle/>
                            </IconButton>
                        }
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    container
                    spacing={1}
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Grid item>
                        <Grid
                            container
                            spacing={1}
                            alignItems='center'
                        >
                            <Grid item>
                                <Typography
                                    display='inline'
                                    color='primary'
                                    style={{ fontWeight: 600 }}
                                >
                                    Last Name:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    sx={{marginBottom: -0.5}}
                                    size='small'
                                    variant='standard'
                                    value={lastName}
                                    onChange={e => {
                                        const c = e.target.value
                                        setLastName(c)
                                        c !== last_name && c.length ?
                                            setLastNameIsEdited(true)
                                            : setLastNameIsEdited(false)
                                    }}
                                    InputProps={{ disableUnderline: true }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        {lastNameIsEdited &&
                            <IconButton
                                disabled={lastNameIsLoading}
                                size='small'
                                color='secondary'
                                onClick={handleSetLastName}
                            >
                                <FaRegCheckCircle/>
                            </IconButton>
                        }
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    container
                    spacing={1}
                    alignItems='center'
                >
                    <Grid item>
                        <Typography
                            display='inline'
                            color='primary'
                            style={{ fontWeight: 600 }}
                        >
                            Email:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            display='inline'
                        >
                            {email}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    container
                    spacing={1}
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Grid item>
                        <Grid
                            container
                            spacing={1}
                            alignItems='center'
                        >
                            <Grid item>
                                <Typography
                                    display='inline'
                                    color='primary'
                                    style={{ fontWeight: 600 }}
                                >
                                    Parent of:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    sx={{marginBottom: -0.5}}
                                    size='small'
                                    variant='standard'
                                    value={childName}
                                    onChange={e => {
                                        const c = e.target.value
                                        setChildName(c)
                                        c !== child && c.length ?
                                            setChildNameIsEdited(true)
                                            : setChildNameIsEdited(false)
                                    }}
                                    InputProps={{ disableUnderline: true }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        {childNameIsEdited &&
                            <IconButton
                                disabled={childNameIsLoading}
                                size='small'
                                color='secondary'
                                onClick={handleSetChildName}
                            >
                                <FaRegCheckCircle/>
                            </IconButton>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TeacherInfo;
