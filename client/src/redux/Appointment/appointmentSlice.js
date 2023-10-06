import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { addAppointment, getAppointMents } from './appointmentActions'

const initialState = {
    appointment: null,
    isLoading: false
}

const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(addAppointment.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(addAppointment.fulfilled, (state, action) => {
            state.isLoading = false
            state.appointment = action.payload?.appointment
        })
        builder.addCase(addAppointment.rejected, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(getAppointMents.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getAppointMents.fulfilled, (state, action) => {
            state.isLoading = false
            state.appointment = action.payload
        })
        builder.addCase(getAppointMents.rejected, (state, action) => {
            state.isLoading = false
        })


    }
});




export default appointmentSlice.reducer;
