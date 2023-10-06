import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './redux/Auth/authSlice'
import doctorReducer from './redux/Doctors/doctorSlice'


const store = configureStore({
    reducer: {
        auth: authReducer,
        doctors: doctorReducer

    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store;