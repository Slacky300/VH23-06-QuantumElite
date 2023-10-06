import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
const host = process.env.REACT_APP_API_HOST;


const token = localStorage.getItem('token')

export const addAppointment = createAsyncThunk(
    'appointment/addAppointment',
    async ({ doctorId, patientId, date, time, description }, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(`${host}/api/v1/appointment/add-appointment`,
                { doctorId, patientId, date, time, description }, {
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


export const getAppointMents = createAsyncThunk(
    'doctors/getAppointMents',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.get(`${host}/api/v1/doctor/all-appointments/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            if (response.status === 200) {

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


export const acceptOrRejectApt = createAsyncThunk(
    'appointment/acceptOrRejectApt',
    async ({ appointmentId, status }, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.patch(`${host}/api/v1/appointment/accept-or-reject-apt`,
                { appointmentId, status }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                toast.success("Appointment updated Successfully")
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


export const getAllotmentByPatient = createAsyncThunk(
    'appointment/getAllotmentByPatient',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.get(`${host}/api/v1/patient`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            if (response.status === 200) {

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

