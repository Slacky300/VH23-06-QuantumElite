import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { verifyDoctor, verifyVendor } from './adminActions'

const initialState = {
    isLoading: false,
    admin: null
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(verifyDoctor.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(verifyDoctor.fulfilled, (state, action) => {
            state.isLoading = false
            state.admin = action.payload
        })

        builder.addCase(verifyDoctor.rejected, (state, action) => {
            state.isLoading = false
        })


        builder.addCase(verifyVendor.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(verifyVendor.fulfilled, (state, action) => {
            state.isLoading = false
            state.admin = action.payload
        })

        builder.addCase(verifyVendor.rejected, (state, action) => {
            state.isLoading = false
        })



    }
})
