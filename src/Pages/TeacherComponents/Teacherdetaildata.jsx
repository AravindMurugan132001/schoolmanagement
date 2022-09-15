import React from "react";
import styles from "../css/Teacherdashboard.module.css";


export function Teacherdetail1(){
    const detaildata1=[
        {
            "img":"images/profileimg.png",
            "title":<b>Name</b>,
            "value":"Ashith VL" 
        },
        {
            "img":"images/profileimg.png",
            "title":<b>ClassTeacher</b>,
            "value":"10th Standard" 
        },
        {
            "img":"images/profileimg.png",
            "title":<b>Teacher Id</b>,
            "value":"143143" 
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

export function Teacherdetail2(){
    const detaildata1=[
        {
            "img":"images/profileimg.png",
            "title":<b>DOB</b>,
            "value":"14/02/1995" 
        },
        {
            "img":"images/profileimg.png",
            "title":<b>Mobile</b>,
            "value":"7667576678" 
        },
        {
            "img":"images/profileimg.png",
            "title":<b>Subject</b>,
            "value":"Physics" 
        }
    ];
    return(
        <div className={styles.detail2}>
            {
                detaildata1.map((data)=>{
                    const {img,title,value}=data;
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