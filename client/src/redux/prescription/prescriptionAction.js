import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
const host = process.env.REACT_APP_API_HOST;

const token = localStorage.getItem('token')


export const prescriptionAction = createAsyncThunk(
    'prescription/prescriptionAction',
    async ({ patientId, description, prescImg }, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(`${host}/api/v1/prescription/add-prescription`, {
                patientId: patientId,
                description: description,
                prescImg: prescImg
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 200) {
                toast.success("Prescription added Successfully")
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

export const getPrescriptionAction = createAsyncThunk(
    'prescription/getPrescriptionAction',
    async ({ patientId }, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.get(`${host}/api/v1/prescription`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
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

export const getAssignedPrescriptionsAction = createAsyncThunk(
    'prescription/getAssignedPrescriptionsAction',
    async ( patientId, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.get(`${host}/api/v1/prescription/${patientId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
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