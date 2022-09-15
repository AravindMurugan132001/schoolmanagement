import React from "react";
import styles from "../css/AdminDashboard.module.css";
import { Admindetail } from "./Admindetail";

const Adminprofile = () => {
  return (
    <div className={styles.AdminProfile}>
      <h3>Admin Profile</h3>
      <div className={styles["profile-container"]}>
        <div className={styles["profile-picture"]}>
          <img src="images/adminlogo.jpg" alt="" width="120" />
        </div>
        <div className={styles["admin-details"]}>
          <Admindetail></Admindetail>
        </div>
      </div>
    </div>
  );
};

export default Adminprofile;
