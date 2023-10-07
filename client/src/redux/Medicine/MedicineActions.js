import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
const host = process.env.REACT_APP_API_HOST;

const token = localStorage.getItem('token')


export const createMedicine = createAsyncThunk(
    'medicine/createMedicine',
    async ({ medicine, price, quantity, description, image }, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(`${host}/api/v1/vendor/add-medicine`,
                {
                    medicineName: medicine,
                    quantity: quantity,
                    price: price,
                    description: description,
                    medImg: image
                }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                toast.success("Medicine added Successfully")
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

export const getAllMedicine = createAsyncThunk(
    'medicine/getAllMedicine',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.get(`${host}/api/v1/vendor`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                return response.data.reverse();
            } else {
                toast.error("Something went wrong")

            }
        } catch (err) {
            toast.error(err?.response?.data?.message);
            console.log(err.message)
        }
    }
)
