import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { registerAsDoctor, registerAsVendor, registerAsPatient, loginUser, getLoggedinUser } from './authActions'

const initialState = {
    user: null,
    token: '',
    isLoading: false
}



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(registerAsPatient.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(registerAsPatient.fulfilled, (state, action) => {
            state.isLoading = false
            // state.user = action.payload?.user
            // state.token = action.payload?.token
        })
        builder.addCase(registerAsPatient.rejected, (state, action) => {
            state.isLoading = false
        })

        builder.addCase(registerAsDoctor.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(registerAsDoctor.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload?.user
            state.token = action.payload?.token
        })
        builder.addCase(registerAsDoctor.rejected, (state, action) => {
            state.isLoading = false
        })

        builder.addCase(registerAsVendor.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(registerAsVendor.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload?.user
            state.token = action.payload?.token
        })
        builder.addCase(registerAsVendor.rejected, (state, action) => {
            state.isLoading = false
        })

        builder.addCase(loginUser.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload?.user
            state.token = action.payload?.token
        })

        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false
        })

        builder.addCase(getLoggedinUser.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(getLoggedinUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload?.user
        })

        builder.addCase(getLoggedinUser.rejected, (state, action) => {
            state.isLoading = false
        })
    }
})


export default authSlice.reducer
