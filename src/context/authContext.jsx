import { useState, createContext, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext(null)


export const AuthController = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [tokenStorage, setTokenStorage] = useState(null); 
    let navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            setTokenStorage(token); 
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setTokenStorage(null); 
        setIsAuthenticated(false);
        navigate('/login');
    };

    const handleLogin = async (e, email, password) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/login", { email, password });
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                setTokenStorage(response.data.token); 
                setIsAuthenticated(true);
                alert(response.data.message);
                navigate('/');
            }
        } catch (error) {
            alert(error.response.data);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, tokenStorage, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
}