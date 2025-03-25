import './App.css'
import {useContext } from 'react'
import { ServicesContext } from './context/servicesContext.jsx'

function App() {

  const [services, setServices] = useContext(ServicesContext)


  return (
    <>
      <h1 className="text-3xl font-bold underline bg-sky-300">Hello this is my event APP</h1>
      <div className='flex flex-wrap p-7 m-7 space-between'>
      {services && services.map(service => {
        return ( 
          <ul>
          {services.map((service, index) => (
             <li 
             key={index} 
             className="bg-cyan-500 shadow-md rounded-lg p-4 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105"
           >
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
        )
      })}
      </div>
    </>
  )
}

export default App
