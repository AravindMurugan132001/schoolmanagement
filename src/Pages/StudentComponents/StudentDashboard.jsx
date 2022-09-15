import React from "react";

import Sidenav from "../GeneralComponents/Sidenav";
import genaralStyles from "../css/General.module.css";
import styles from "../css/StudentDashboard.module.css";
import Studentprofile from "./Studentprofile";
import StudentNoticeAssignments from "./StudentNoticeAssignments";
import StudentTimeTable from "./StudentTimeTable";

const StudentDashboard = () => {
  return (
    <div className={`container-fluid ${genaralStyles["body-section"]}`}>
      <div className={`row ${genaralStyles["main-cont"]}`}>
        <div className={`col-1 ${genaralStyles["side-nav"]}`}>
          <Sidenav></Sidenav>
        </div>
        <div className={`col-11 ${styles["student-profile"]}`}>
          <div className={`row`}>
            <div className="col-8">
              <Studentprofile></Studentprofile>
              <StudentNoticeAssignments></StudentNoticeAssignments>
            </div>
            <div className="col-4">
              <StudentTimeTable></StudentTimeTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
