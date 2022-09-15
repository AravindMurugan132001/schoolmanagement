import React from "react";
import styles from "../css/AdminDashboard.module.css";

export function Admindetail(){
    const detail=[
        {
            "img":"images/profileimg.png",
            "title":<b>Admin Name : </b>,
            "value":"NSEIT"
        },
        {
            "img":"images/profileimg.png",
            "title":<b>Admin Id : </b>,
            "value":"215"
        }
    ];
    return(
        <div className={styles.detail}>
            {
                detail.map((data)=>{
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