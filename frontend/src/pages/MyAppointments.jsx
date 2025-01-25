import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div>
    <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
    <div>
      {doctors.slice(0,2).map((item,index)=>(
        <div key={index}>
          <div>
            <img src={item.image} />
          </div>
          <div>
          <p>{item.name}</p>
          <p>{item.speciality}</p>
          <p>Address</p>
          <p>{item.address.line1}</p>
          <p>{item.address.line2}</p>
          <p><span>Date & Time</span> 25, January, 2025 | 11.20 PM</p>
        </div>
        <div></div>
        <div>
          <button>Pay Online</button>
          <button>Cancel Appointment</button>
        </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default MyAppointments
