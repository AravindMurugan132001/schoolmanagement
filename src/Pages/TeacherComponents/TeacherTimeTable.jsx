import React from "react";
import styles from "../css/Teacherdashboard.module.css";

const TeacherTimeTable = () => {
  return (
    <>
      <div className={styles.timetable}>
        <h3>Daily Schedule</h3>
        <div className={styles.period1}>
          <img className={styles.icons} src="images/std6.png"></img>
          <h3 className={styles.standardname}>6th Standard</h3>
        </div>
        <div className={styles.period2}>
          <img className={styles.icons} src="images/std8.png"></img>
          <h3 className={styles.standardname}>8th Standard</h3>
        </div>
        <div className={styles.period3}>
          <img className={styles.icons} src="images/std4.png"></img>
          <h3 className={styles.standardname}>4th Standard</h3>
        </div>
        <div className={styles.period4}>
          <img className={styles.icons} src="images/std10.png"></img>
          <h3 className={styles.standardname}>10th Standard</h3>
        </div>
        <div className={styles.period5}>
          <img className={styles.icons} src="images/std9.png"></img>
          <h3 className={styles.standardname}>9th Standard</h3>
        </div>
      </div>
    </>
  );
};

export default TeacherTimeTable;
