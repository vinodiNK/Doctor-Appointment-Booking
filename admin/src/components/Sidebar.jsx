import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'

const Sidebar = () => {

const {aToken} = useContext(AdminContext)

  return (
    <div>
      {
        aToken && <ul>
          <NavLink to ={'/admin-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink to={'all-appointments'}>
            <img src={assets.appointment_icon} alt="" />
            <p>Appointments</p>
          </NavLink>

          <NavLink to={'/add-doctor'}>
            <img src={assets.add_icon} alt="" />
            <p>Add Doctor</p>
          </NavLink>

          <NavLink to={'/doctors-list'}>
            <img src={assets.people_icon} alt="" />
            <p>Doctors List</p>
          </NavLink>

        </ul>
      }
    </div>
  )
}

export default Sidebar
