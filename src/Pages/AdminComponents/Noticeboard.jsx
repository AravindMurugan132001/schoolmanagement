import React,{ useState }  from "react";

import styles from "../css/AdminDashboard.module.css";

const Noticeboard = () => {
    
  const NoticeText={NoticeText:""};
  const [formValues,setFormValues]=useState(NoticeText);
  
  const handleChange=(t)=>{
    const {NoticeText,value}=t.target;
    setFormValues({...formValues,[NoticeText]:value});
  }
  const displayValues = (formValues) => {
    const value = window.tabValue;
    const ntext={"NoticeText":formValues.NoticeText};
    console.log(ntext.NoticeText);
  }

    return (
    <div>
      <div className={styles.noticeboard}>
        <h4 className={styles.noticeboardtxt}>
          Add Announcement To Notice Board
        </h4>
      </div>
       <h5 className={styles.noticeboardbody}>
       <input type="text" name="NoticeText" id={styles.admNoticeInputs} placeholder="Type hear to Announce...." onChange={handleChange}/>
      </h5> 
      <button className={styles["notice-btn"]} onClick = {()=>{displayValues(formValues)}}>
            <h5 className={styles["noticetxt-btn"]}>Clik Hear To Announce</h5>
          </button>
    </div>
  );
};

export default Noticeboard;
