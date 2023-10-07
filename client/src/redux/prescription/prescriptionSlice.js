import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { prescriptionAction, getPrescriptionAction } from './prescriptionAction'

const initialState = {
    isLoading: false,
    prescriptions: []
}



export const prescriptionSlice = createSlice({
    name: 'prescription',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(prescriptionAction.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(prescriptionAction.fulfilled, (state, action) => {
            state.isLoading = false
            state.prescriptions = action.payload
        })

        builder.addCase(prescriptionAction.rejected, (state, action) => {
            state.isLoading = false
        })

        builder.addCase(getPrescriptionAction.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(getPrescriptionAction.fulfilled, (state, action) => {
            state.isLoading = false
            state.prescriptions = action.payload
        })

        builder.addCase(getPrescriptionAction.rejected, (state, action) => {
            state.isLoading = false
        })

    }
})