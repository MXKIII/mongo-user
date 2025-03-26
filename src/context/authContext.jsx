import { useState, createContext } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext(null)


export const AuthController = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    let navigate = useNavigate()

    const handleLogin = async(e, email, password) =>{
        e.preventDefault()
        console.log(email, password)
        try {
            const response = await axios.post("http://localhost:8000/api/login", {email,password})
            if(response.status===200){
                localStorage.setItem('token',response.data.token)
                setIsAuthenticated(true)
                alert(response.data.message)
                navigate('/')
            }
        } catch (error) {
            alert(error.response.data)
        }
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, handleLogin}}>
            {children}
        </AuthContext.Provider>
    )
}