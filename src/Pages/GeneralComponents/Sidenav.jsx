import React from 'react'
import generalStyles from "../css/General.module.css";

const Sidenav = () => {
  return (
    <div className={generalStyles["nav-menus"]}>
        <a href="#">
            <h5 className={generalStyles.sidenavdetails}> Dashboard</h5 >
        </a>
        <a href="#">
            <h5 className={generalStyles.sidenavdetails}> Notifications</h5 >
        </a>
        <a href="#">
            <h5 className={generalStyles.sidenavdetails}> Lectures</h5 >
        </a>
        <a href="/Loginpage">
            <h5 className={generalStyles.sidenavdetails}> Logout</h5 >
        </a>
    </div>
  )
}

export default Sidenav