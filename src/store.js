import {configureStore} from '@reduxjs/toolkit'
import loadingReducer from './features/loading/loadingSlice'
import authorizedSlice from "./features/auth/authSlice";

export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        authorized: authorizedSlice
    },
})
