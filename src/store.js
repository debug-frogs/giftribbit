import {configureStore} from '@reduxjs/toolkit'
import loadingReducer from './features/loading/loadingSlice'
import authorizedSlice from "./features/authorized/authorizedSlice";

export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        authorized: authorizedSlice
    },
})
