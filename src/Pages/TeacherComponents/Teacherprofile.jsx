import React from 'react'
import styles from "../css/Teacherdashboard.module.css";
import { Teacherdetail1 } from './Teacherdetaildata'
import { Teacherdetail2 } from './Teacherdetaildata'


const Teacherprofile = () => {
  return (
    <div className={styles.TeacherProfile}> 
       <h3>My Profile</h3>
       <div className={styles["profile-container"]}>
            <div className={styles["profile-picture"]}>
                <img src="images/TeacherProfileLogo.jpg" alt="" width="120"/>
            </div>
            <div className={styles["teacher-details"]}>
                <Teacherdetail1></Teacherdetail1>
                <Teacherdetail2></Teacherdetail2>
            </div>
        </div>
    </div>
  )
}

export default Teacherprofile