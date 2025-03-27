import { Link } from 'react-router'
import { useContext } from 'react'
import { ServicesContext } from '../context/servicesContext'
import { AuthContext } from '../context/authContext'

const NavBar = () => {
    const [services, setServices] = useContext(ServicesContext)
    const {isAuthenticated, handleLogout} = useContext(AuthContext)

    console.log(isAuthenticated)
    return (
        <>
            <h1>Hello there is {services.length} events</h1>
            <ul className='bg-gray-500 flex justify-center space-x-4'>
                <Link to='/'><li>Home</li></Link>
                {!isAuthenticated ? (
                    <>
                        <Link to='/register'><li>Register</li></Link>
                        <Link to='/login'><li>Login</li></Link>
                    </>
                )

                    : (
                        <>
                            <Link to='/profile'><li>Profile</li></Link>
                            <Link to='/logout' onClick={handleLogout}><li>logout</li></Link>
                        </>
                    )
                    }
            </ul>
        </>
    )
}


export default NavBar  