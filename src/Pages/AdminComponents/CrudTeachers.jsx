import React from "react";
import styles from "../css/AdminDashboard.module.css";
import { Link, useNavigate } from "react-router-dom";

const CrudTeachers = () => {
  return (
    <div>
      <div className={styles.Teacherbox}>
        <h4 className={styles.Teacherboxtxt}>Teachers</h4>
        <div className={styles.Tnoticeboardbody}>
          <Link to="/RegisterTeacher">
            <button className={styles["Register-btn"]}>
              <h5 className={styles["noticetxt-btn"]}>Register New Teacher</h5>
            </button>
          </Link>
          <Link to="/AllTeachers">
            <button className={styles["Show-btn"]}>
              <h5 className={styles["noticetxt-btn"]}>Show All Teachers</h5>
            </button>
          </Link>
          <Link to="/UpdateTeacher">
            <button className={styles["Edit-btn"]}>
              <h5 className={styles["noticetxt-btn"]}>Edit Teacher Data</h5>
            </button>
          </Link>
          <Link to="/DeleteTeacher">
            <button className={styles["Delete-btn"]}>
              <h5 className={styles["noticetxt-btn"]}>Delete Teacher Data</h5>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CrudTeachers;
