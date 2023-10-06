import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
const host = 'https://telemedix-backend.onrender.com';

export const registerAsPatient = createAsyncThunk(
    'auth/registerAsPatient',
    async ({ fullName, userType, email, phone, password, age }, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(`${host}/api/v1/auth/register`,
                { fullName, userType, email, phone, password, age });

            if (response.status === 200) {
                toast.success("Registered Successfully")
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


export const registerAsDoctor = createAsyncThunk(
    'auth/registerAsDoctor',
    async ({ fullName, userType, email, phone, password, age, certification }, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(`${host}/api/v1/auth/register`,
                { fullName, userType, email, phone, password, age, certification }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                toast.success("Registered Successfully")
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




export const registerAsVendor = createAsyncThunk(
    'auth/registerAsVendor',
    async ({ fullName, userType, email, phone, password, age, certification, gstNo }, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(`${host}/api/v1/auth/register`,
                { fullName, userType, email, phone, password, age, certification, gstNo }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                toast.success("Registered Successfully")
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



export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(`${host}/api/v1/auth/login`, { email, password });
            if (response.status === 200) {
                toast.success("Logged In Successfully")
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

