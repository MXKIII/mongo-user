import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import MyRouter from './MyRouter.jsx'
import { ServicesController } from './context/servicesContext.jsx'
import { AuthController } from './context/authContext.jsx'

createRoot(document.getElementById('root')).render(
  <ServicesController>
  <AuthController>
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>,
  </AuthController>
</ServicesController>
)
