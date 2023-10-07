import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createMedicine, getAllMedicine } from './MedicineActions'


const initialState = {
    isLoading: false,
    medicines: []
}


export const medicineSlice = createSlice({
    name: 'medicine',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(createMedicine.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(createMedicine.fulfilled, (state, action) => {
            state.isLoading = false
            state.medicines = action.payload
        })

        builder.addCase(createMedicine.rejected, (state, action) => {
            state.isLoading = false
        })

        builder.addCase(getAllMedicine.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(getAllMedicine.fulfilled, (state, action) => {
            state.isLoading = false
            state.medicines = action.payload
        })

        builder.addCase(getAllMedicine.rejected, (state, action) => {
            state.isLoading = false
        })


    }
})


export default medicineSlice.reducer;