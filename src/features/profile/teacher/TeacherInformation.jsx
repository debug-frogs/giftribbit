import {useContext, useState} from 'react';
import {Grid, IconButton, TextField, Typography} from "@mui/material";
import {ProfileContext} from "../../../pages/profile";
import {FaRegCheckCircle} from "react-icons/fa";
import axios from "../../../../lib/axios";


const TeacherInformation = () => {
    const [profile, setProfile] = useContext(ProfileContext)
    const {first_name, last_name, email, school} = profile

    const [firstName, setFirstName] = useState(first_name)
    const [firstNameIsLoading, setFirstNameIsLoading] = useState(false)
    const [firstNameIsEdited, setFirstNameIsEdited] = useState(false)
    const [lastName, setLastName] = useState(last_name)
    const [lastNameIsLoading, setLastNameIsLoading] = useState(false)
    const [lastNameIsEdited, setLastNameIsEdited] = useState(false)
    const [schoolName, setSchoolName] = useState(school)
    const [schoolNameIsLoading, setSchoolNameIsLoading] = useState(false)
    const [schoolNameIsEdited, setSchoolNameIsEdited] = useState(false)

    const handleSetFirstName = async () => {
        try {
            setFirstNameIsLoading(true)
            const updateTeacherRes = await axios.patch('/api/update/teacher', {
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
            const updateTeacherRes = await axios.patch('/api/update/teacher', {
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

    const handleSetSchoolName = async () => {
        try {
            setSchoolNameIsLoading(true)
            const updateTeacherRes = await axios.patch('/api/update/teacher', {
                id: profile.id,
                school: schoolName
            })
            const newProfile = {...profile}
            newProfile.school = school
            setProfile(newProfile)
        }
        finally {
            setSchoolNameIsLoading(false)
            setSchoolNameIsEdited(false)
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
                                    School:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    sx={{marginBottom: -0.5}}
                                    size='small'
                                    variant='standard'
                                    value={schoolName}
                                    onChange={e => {
                                        const c = e.target.value
                                        setSchoolName(c)
                                        c !== school && c.length ?
                                            setSchoolNameIsEdited(true)
                                            : setSchoolNameIsEdited(false)
                                    }}
                                    InputProps={{ disableUnderline: true }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        {schoolNameIsEdited &&
                            <IconButton
                                disabled={schoolNameIsLoading}
                                size='small'
                                color='secondary'
                                onClick={handleSetSchoolName}
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

export default TeacherInformation;
