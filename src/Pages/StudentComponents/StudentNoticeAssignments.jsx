import React from "react";
import styles from "../css/StudentDashboard.module.css";

const StudentNoticeAssignments = () => {
  return (
    <div>
      <div className={styles.noticeboard}>
        <h4 className={styles.noticeboardtxt}> Notice Board</h4>
      </div>

      <h5 className={styles.noticeboardbody}>
        There is one more day left for project submission
      </h5>

      <div className={styles.assignment}>
        <h4 className={styles.assignmenttxt}>Assignments</h4>
      </div>
      <h5 className={styles.assignmentbody}>
        Today's Assingment for you is compleating Front end
      </h5>
    </div>
  );
};

export default StudentNoticeAssignments;
