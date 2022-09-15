import React from "react";
import styles from "../css/StudentDashboard.module.css";

const StudentTimeTable = () => {
  return (
    <>
      <div className={styles.stimetable}>
        <h3>Daily Schedule</h3>
        <div className={styles.sub1}>
          <img className={styles.icons} src="images/engicon.jpg"></img>
          <h3 className={styles.subname}>English</h3>
        </div>
        <div className={styles.sub2}>
          <img className={styles.icons} src="images/scienceicon.jpg"></img>
          <h3 className={styles.subname}>Science</h3>
        </div>
        <div className={styles.sub3}>
          <img className={styles.icons} src="images/tamilicon.png"></img>
          <h3 className={styles.subname}>Tamil</h3>
        </div>
        <div className={styles.sub4}>
          <img className={styles.icons} src="images/physicsicon.jpg"></img>
          <h3 className={styles.subname}>Physics</h3>
        </div>
        <div className={styles.sub5}>
          <img className={styles.icons} src="images/mathsicon.png"></img>
          <h3 className={styles.subname}>Mathematics</h3>
        </div>
      </div>
    </>
  );
};

export default StudentTimeTable;
