import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AdminContextProvider from './context/AdminContext.jsx'
import DoctorContextProvider from './context/DoctorContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <AdminContextProvider>
  <DoctorContextProvider>
  <App />
  </DoctorContextProvider>
 </AdminContextProvider>
 </BrowserRouter>,
    
 
)
