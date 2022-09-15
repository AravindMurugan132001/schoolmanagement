import React from 'react'
import styles from "../css/StudentDashboard.module.css"
import { Studentdetail1 } from './Studentdetaildata'
import { Studentdetail2 } from './Studentdetaildata'

const Studentprofile = () => {
  return (
    <div className={styles.StudentsProfile}>
        <h3>My Profile</h3>
        <div className={styles["profile-container"]}>
            <div className={styles["profile-picture"]}>
                <img src="images/StudentProfileLogo.jpg" alt="" width="120"/>
            </div>
            <div className={styles["student-details"]}>
                <Studentdetail1></Studentdetail1>
                <Studentdetail2></Studentdetail2>
            </div>
        </div>
    </div>
  )
}

export default Studentprofile