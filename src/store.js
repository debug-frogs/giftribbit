import {configureStore} from '@reduxjs/toolkit'
import authorizedSlice from "./features/auth/authSlice";

export const store = configureStore({
    reducer: {
        authorized: authorizedSlice
    },
})
