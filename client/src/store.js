import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './redux/Auth/authSlice'
import appointmentReducer from './redux/Appointment/appointmentSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        appointment: appointmentReducer

    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store;