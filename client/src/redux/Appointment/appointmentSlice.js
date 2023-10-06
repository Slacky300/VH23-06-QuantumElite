import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { addAppointment, getAppointMents, acceptOrRejectApt, getAllotmentByPatient } from './appointmentActions'

const initialState = {
    appointment: null,
    isLoading: false,
    allotmentByUser: null
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

        builder.addCase(acceptOrRejectApt.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(acceptOrRejectApt.fulfilled, (state, action) => {
            state.isLoading = false
            state.appointment = action.payload
        })
        builder.addCase(acceptOrRejectApt.rejected, (state, action) => {
            state.isLoading = false
        })

        builder.addCase(getAllotmentByPatient.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(getAllotmentByPatient.fulfilled, (state, action) => {
            state.isLoading = false
            state.allotmentByUser = action.payload
        })

        builder.addCase(getAllotmentByPatient.rejected, (state, action) => {
            state.isLoading = false
        })



    }
});




export default appointmentSlice.reducer;
