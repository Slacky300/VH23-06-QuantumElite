import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        user: null,
        token: ''
    })
    axios.defaults.headers.common['Authorization'] = auth?.token

    const token = localStorage.getItem('auth')

    const getLoggedinUser = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/v1/auth/get-logged-in-user', {
                headers: {
                    Authorization: `Bearer ${token} `
                }
            });

            setAuth({
                ...auth,
                user: res.data.user
            })

            console.log('user' + auth.user)

        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        const data = localStorage.getItem('auth')
        if (data) {
            const parseData = JSON.parse(data)
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token
            })
        }

        getLoggedinUser()
    }, [])
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }