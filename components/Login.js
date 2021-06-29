import React, { useEffect } from 'react'
import styles from '../styles/Index.module.css'
import Navbar from './Navbrar'
import LoginContent from './loginContent'

const Login = () => {
    return (
        <div className={styles.LoginContainer}>
            <Navbar />
            <LoginContent />
        </div>
    )
}





export default Login
