import React from "react";
import genaralStyles from "../css/General.module.css";
import Sidenav from "../GeneralComponents/Sidenav";
import Adminprofile from "../AdminComponents/Adminprofile";
import styles from "../css/AdminDashboard.module.css";
import Noticeboard from "../AdminComponents/Noticeboard";
import CrudStudents from "../AdminComponents/CrudStudents";
import CrudTeachers from "../AdminComponents/CrudTeachers";
const AdminDashboard = () => {
  return (
    <div className={`container-fluid ${genaralStyles["body-section"]}`}>
      <div className={`row ${genaralStyles["main-cont"]}`}>
        <div className={`col-1 ${genaralStyles["side-nav"]}`}>
          <Sidenav></Sidenav>
        </div>
        <div className={`col-11 ${styles["admin-profile"]}`}>
          <div className={`row`}>
            <div className="col-8">
              <Adminprofile></Adminprofile>
              <Noticeboard></Noticeboard>
              <CrudStudents></CrudStudents>
              <CrudTeachers></CrudTeachers>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
