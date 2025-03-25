import { Route, Routes } from "react-router-dom";
import Profile from "./page/profile";
import NavBar from "./components/navBar";
import App from "./App";
import Contact from "./page/contact";
import Register from "./page/register";
const MyRouter = () =>{
    return(
        <>
         < NavBar />
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
        </>
    )
}

export default MyRouter