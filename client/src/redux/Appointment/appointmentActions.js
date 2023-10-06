import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
const host = process.env.REACT_APP_API_HOST;


const token = localStorage.getItem('token')

export const addAppointment = createAsyncThunk(
    'appointment/addAppointment',
    async ({ doctorId, patientId, date, time }, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(`${host}/api/v1/appointment/add-appointment`,
                { doctorId, patientId, date, time }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                toast.success("Appointment added Successfully")
                return response.data;
            } else {
                toast.error("Something went wrong")

            }
        } catch (err) {
            toast.error(err?.response?.data?.message);
            console.log(err.message)
        }
    }
)