import React, { useState } from 'react'
import styles from "../css/loginpage.module.css"

const LoginInput = () => {

    const initialInput = {username:"",password:""};
    const [formValues,setFormValues] = useState(initialInput);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormValues({...formValues,[name]: value});
    }

    const displayValues = (formValues) => {
        const value = window.tabValue;
        const userdetails = {"username":formValues.username, "password":formValues.password};

        if(value === undefined || value === 0) 
            console.log("Admin"+" "+userdetails.username+" "+userdetails.password);
        else if(value === 1)   
            console.log("Student"+" "+userdetails.username+" "+userdetails.password);
        else 
            console.log("Teacher"+" "+userdetails.username+" "+userdetails.password);
    }

  return (
    <div className={styles['input-section']}>
        <input type="text" name="username" id={styles.inputs} placeholder="username" onChange={handleChange}/>
        <input type="password" name="password" id={styles.inputs} placeholder="password" onChange={handleChange}/>
        <button className={styles['signin-btn']} onClick = {()=>{displayValues(formValues)}}>Sign In</button>
    </div>
  )
}

export default LoginInput