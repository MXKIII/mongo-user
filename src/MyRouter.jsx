import { Route, Routes } from "react-router-dom";
import Profile from "./page/profile";
import NavBar from "./components/navBar";
import App from "./App";
import Contact from "./page/contact";
import Register from "./page/register";
import Login from "./page/login";
import ProtectedRoute from "./utils/protectedRoute";
import Users from "./page/users";
import UserDetails from "./page/userDetails";

const MyRouter = () =>{
    return(
        <>
         < NavBar />
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/profile' element={
                <ProtectedRoute>
                    <Profile/>
                </ProtectedRoute>
                }/>   
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetails />} /> 
        </Routes>
        </>
    )
}

export default MyRouter