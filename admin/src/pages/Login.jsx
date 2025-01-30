import React, { useState } from 'react'

const Login = () => {

    const [state,setState] = useState ('Admin')

  return (
    <from className='min-h-[80vh] flex items-center'> 
       <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
      <p><span>{state}</span> Login </p>
      <div>
        <p>Email</p>
        <input type='email' required />
      </div>
      <p>Password</p>
      <input type='password' required />
    </div>
    <button>Login</button>
    </from>
  )
}

export default Login
