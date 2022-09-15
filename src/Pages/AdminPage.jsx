import React from 'react'
import {Navbar}from "./GeneralComponents/Navbar"
import AdminDashboard from "./AdminComponents/AdminDashboard"

const AdminPage = () => {
  return (
    <div>
       <Navbar></Navbar> 
       <AdminDashboard></AdminDashboard>
    </div>
  )
}

export default AdminPage