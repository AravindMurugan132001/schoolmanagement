import React from 'react'
import generalStyles from "../css/General.module.css";

export const Navbar = () => {
    const OpenNav = ()=>{
        if(window.screen.width>="1024"){
            document.getElementById("myNav").style.width="20%";
        }
        else if(window.screen.width>="768" && window.screen.width<"1024"){
            document.getElementById("myNav").style.width="30%";
        }
        else{
            document.getElementById("myNav").style.width="80%";
        }
    }

   const closeNav=()=>{
    document.getElementById("myNav").style.width="0%";
   } 

  return (
    <div className={generalStyles["navigation-bar"]}>
        <div className={generalStyles["sitelogo-menu"]}>
            <div id="myNav" className={generalStyles.overlay}>
               <a href="javascript:void(0)" className={generalStyles.closebtn} onClick={closeNav}>&times;</a>
               <div className={generalStyles["overlay-content"]}>
                    <a href="#"> Dashboard</a>
                    <a href="#"> Notification</a>
                    <a href="#"> Community</a>
                    <a href="#"> Profile</a>
                    <a href="#"> Logout</a>
                </div>
            </div>
            <div className={generalStyles.siteinfo}>
                <div onClick={OpenNav}><img src="images/menu.jpg" className={generalStyles.site} width="30" height="30" /></div>
                <h3 className={generalStyles["logo"]}>E-Skool</h3>
            </div>
        </div>
        <div className={generalStyles.dashboard}>
            Dashboard
        </div>
        <div className={generalStyles.dropdown}>
            <div className={generalStyles["user-info"]}>
                <h6 className={generalStyles["user-name"]} id="profile-Name">Profile</h6>
                <img className={generalStyles["display-picture"]} src="images/StudentProfileLogo.jpg" alt="profile-picture" width="45" height="45"/>
            </div>      
        </div>
    </div>
  )
}