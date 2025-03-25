import { useState } from "react";
import axios from "axios"
import {  useNavigate } from "react-router-dom";

const Register = () => {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    let navigate = useNavigate()

    const handleRegistration = async (e) =>{
        e.preventDefault()
        console.log('Submit')
        try {
            const newUser = await axios.post("http://localhost:8000/api/register", {first_name : firstName,last_name : lastName, email, password})
            if(newUser.status===201){
                console.log(newUser)
                navigate('/')
            }
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return (
      <div className="container mx-auto mt-10">
        <form onSubmit={handleRegistration} className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Inscription</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
              onChange={e=> setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
              onChange={e=> setLastName(e.target.value)}
            />
          </div>
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
            S'inscrire
          </button>
        </form>
      </div>
    );
  }
  
  export default Register;
  