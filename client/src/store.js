import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './redux/Auth/authSlice'

import doctorReducer from './redux/Doctors/doctorSlice'

import appointmentReducer from './redux/Appointment/appointmentSlice'


const store = configureStore({
    reducer: {
        auth: authReducer,

        doctors: doctorReducer,

        appointment: appointmentReducer


    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store;