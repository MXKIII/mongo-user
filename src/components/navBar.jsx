import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <ul>
            <Link to='/' ><li>Home</li></Link>
            <Link to = '/profile'><li>Profile</li></Link>
            <Link to = '/contact'><li>Contact</li></Link>
            <Link to = '/register'><li>S'inscrire</li></Link>
        </ul>
    )
}

export default NavBar