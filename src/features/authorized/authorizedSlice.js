import {createSlice} from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthorized: false
    },
    reducers: {
        setIsAuthorized: (state, action) => {
            state.isAuthorized = action.payload
        },
    },
})

export const {setSub} = profileSlice.actions

export const selectIsAuthorized = (state) => state.authorized.isAuthorized

export default profileSlice.reducer
