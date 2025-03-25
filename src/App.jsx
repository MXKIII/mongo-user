import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

function App() {

  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchServices = async () =>{
    try {
      const response = await axios.get('http://localhost:8000/api/service')
      if(response.status === 200){
      setServices(response.data)
      console.log(response.data)
    }
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  }


  useEffect(()=>{
    fetchServices()
  },[])

  return (
    <>
      <h1 className="text-3xl font-bold underline">this is my event app</h1>
      {services && !loading && (
        <ul>
          {services.map((service, index) => (
             <li key={index} className="mb-4 last:mb-0 border-b border-black pb-2 last:border-b-0">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App
