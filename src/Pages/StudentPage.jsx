import React from "react"
import {Navbar}from "./GeneralComponents/Navbar"
import StudentDashboard from "./StudentComponents/StudentDashboard"

const StudentPage = () => {
  return (
    <div>
     <Navbar></Navbar>
     <StudentDashboard></StudentDashboard>
    </div>
  )
}

export default StudentPage