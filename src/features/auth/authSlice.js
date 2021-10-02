import {createSlice} from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthorized: false,
        isAuthPage: true,
    },
    reducers: {
        setIsAuthorized: (state, action) => {
            state.isAuthorized = action.payload
        },
        setIsAuthPage: (state, action) => {
            state.isAuthPage = action.payload
        },
    },
})

export const {setSub, setIsAuthPage} = profileSlice.actions

export const selectIsAuthorized = (state) => state.authorized.isAuthorized

export const selectIsAuthPage = (state) => state.authorized.isAuthPage

export default profileSlice.reducer
