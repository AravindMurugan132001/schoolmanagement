import React from "react";

import Sidenav from "../GeneralComponents/Sidenav";
import genaralStyles from "../css/General.module.css";
import styles from "../css/Teacherdashboard.module.css";
import Teacherprofile from "./Teacherprofile";
import TeacherNoticeAssignments from "./TeacherNoticeAssignments";
import TeacherTimeTable from "./TeacherTimeTable";


const TeacherDashboard = () => {
  return (
    <div className={`container-fluid ${genaralStyles["body-section"]}`}>
      <div className={`row ${genaralStyles["main-cont"]}`}>
        <div className={`col-1 ${genaralStyles["side-nav"]}`}>
          <Sidenav></Sidenav>
        </div>
        <div className={`col-11 ${styles["student-profile"]}`}>
          <div className={`row`}>
            <div className="col-8">
              <Teacherprofile></Teacherprofile>
              <TeacherNoticeAssignments></TeacherNoticeAssignments>
            </div>
            <div className="col-4">
              <TeacherTimeTable></TeacherTimeTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
