import React from "react"
import {Navbar} from "./GeneralComponents/Navbar"
import TeacherDashboard from "./TeacherComponents/TeacherDashboard"
const TeacherPage = () => {
  return (
    <div>
        <Navbar></Navbar>
        <TeacherDashboard></TeacherDashboard>
    </div>
  )
}

export default TeacherPage