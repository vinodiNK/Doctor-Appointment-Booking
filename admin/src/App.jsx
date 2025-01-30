import React, { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from './context/AdminContext';
import Login from './pages/Login';


const App = () => {

  const {aToken} = useContext(AdminContext)

  return aToken ? (
    <div >
    
      <ToastContainer />
      </div>
  ) : (
    <>
    <Login />
    <ToastContainer />
    </>
  )
  
}

export default App
