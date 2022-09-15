import React from "react";
import styles from "../css/StudentDashboard.module.css";

export function Studentdetail1(){
    const detaildata1=[
        {
            "img":"images/profileimg.png",
            "title":<b>Name</b>,
            "value":"Aravind"
        },
        {
            "img":"images/profileimg.png",
            "title":<b>Standard</b>,
            "value":"5th"
        },
        {
            "img":"images/profileimg.png",
            "title":<b>Rollnumber</b>,
            "value":"1117"
        }
    ];
    return(
        <div className={styles.detail1}>
            {
                detaildata1.map((data)=>{
                    const {img,title,value}=data;
                    return <DataDesign userData={data}></DataDesign>
                })
            }
        </div>
    )
}

export function Studentdetail2(){
    const detaildata2=[
        {
            "img":"images/profileimg.png",
            "title":<b>DOB</b>,
            "value":"13/08/2001"
        },
        {
            "img":"images/profileimg.png",
            "title":<b>Mobile</b>,
            "value":"987665876"
        },
        {
            "img":"images/profileimg.png",
            "title":<b>B_Group</b>,
            "value":"B+ve"
        }
    ];
    return(
        <div className={styles.detail2}>
            {
                detaildata2.map((data)=>{
                    const {DOB,Mobile,BGroup}=data;
                    return <DataDesign userData={data}></DataDesign>
                })
            }
        </div>
    )
}

function DataDesign(props){
    const{img,title,value}=props.userData;
    return(
        <div className={styles.detaildesign}>
            <div className={styles.detaillogo}>
                <img src={img} alt="" width="50"/>
            </div>
            <div className={styles.detail}>
                <h5>{title}</h5> 
                <h6 id={styles.detailvalue}>{value}</h6>
            </div>
        </div>
    );
}