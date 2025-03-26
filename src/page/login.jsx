import { useState,useContext } from "react"
import { AuthContext } from "../context/authContext"

const Login = () =>{
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const { handleLogin } = useContext(AuthContext)
    
    return(
        <div className="container mx-auto mt-10">
        <form onSubmit={e => handleLogin(e, email, password)} className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Connection</h2>
        
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
              onChange={e=> setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
              onChange={e=> setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          >
            Se connecter
          </button>
        </form>
      </div>
    )
}

export default Login