import React from "react";
import styles from "./css/loginpage.module.css";
import LoginInput from "./Loginpage-components/LoginInput";

//Login components
import { CenteredTabs } from "./Loginpage-components/Loginselect"

export const Loginpage = () => {
    return(
        <div className={`container-fluid ${styles['main-container']} gx-0`}>
            <div className={`${styles.row} gx-0 d-flex justify-content-center`}>
                <div className={`col-5 ${styles['login-container']}`}>
                    <h3 className={styles['page-title']}>E-Skool Login</h3>
                    <CenteredTabs></CenteredTabs>
                    <LoginInput></LoginInput>
                    <div className={styles['frgt-password']}><a href="#"> Forgot Password?</a></div>
                </div>
            </div>
        </div>
    );
}

export default Loginpage