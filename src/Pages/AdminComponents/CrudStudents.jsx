import React from "react";
import styles from "../css/AdminDashboard.module.css";
import { Link, useNavigate } from "react-router-dom";

const CrudStudents = () => {
  return (
    <div>
    <div className={styles.Studentbox}>
      <h4 className={styles.Studentboxtxt}>Students</h4>
      <div className={styles.Snoticeboardbody}>
        <Link to="/RegisterStudent">
        <button className={styles["Register-btn"]}>
          <h5 className={styles["noticetxt-btn"]}>Register New Student</h5>
        </button>
        </Link>
        
        <Link to="/AllStudents">
        <button className={styles["Show-btn"]}>
          <h5 className={styles["noticetxt-btn"]}>Show All Student</h5>
        </button>
        </Link>
        <Link to="/UpdateStudent">
        <button className={styles["Edit-btn"]}>
          <h5 className={styles["noticetxt-btn"]}>Edit Student Data</h5>
        </button>
        </Link>
        <Link to="/DeleteStudent">
        <button className={styles["Delete-btn"]}>
          <h5 className={styles["noticetxt-btn"]}>Delete Student Data</h5>
        </button>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default CrudStudents;
