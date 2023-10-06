import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getDoctors } from './doctorActions'


const initialState = {
    doctors: [],
    isLoading: false
}


export const doctorSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(getDoctors.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getDoctors.fulfilled, (state, action) => {
            state.isLoading = false
            state.doctors = action.payload
        })
        builder.addCase(getDoctors.rejected, (state, action) => {
            state.isLoading = false
        })

    }
})

export default doctorSlice.reducer;



