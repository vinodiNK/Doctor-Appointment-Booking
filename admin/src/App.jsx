import React, { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar';
import { AdminContext } from './context/AdminContext';
import Login from './pages/Login';


const App = () => {

  const { aToken } = useContext(AdminContext)

  return aToken ? (
    <div className='bg-[#F8F9FD]' >
    
      <ToastContainer />
      
      <Login />
      </div>

  ) : (
    <>
    <Navbar />
    
    <ToastContainer />
    </>
  )
  
}

export default App
