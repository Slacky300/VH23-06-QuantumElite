import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
const host = process.env.REACT_APP_API_HOST;


const token = localStorage.getItem('token')


export const verifyVendor = createAsyncThunk(
    'admin/verifyVendor',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.put(`${host}/api/v1/admin/verifyVendor/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            if (response.status === 200) {
                toast.success("Vendor Verified Successfully")
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


export const verifyDoctor = createAsyncThunk(
    'admin/verifyDoctor',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.put(`${host}/api/v1/admin/verifyDoctor/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            if (response.status === 200) {
                toast.success("Doctor Verified Successfully")
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