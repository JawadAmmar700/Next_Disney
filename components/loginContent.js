import React from 'react'
import styles from '../styles/loginContent.module.css'

const loginContent = () => {
    return (
        <div className={styles.loginContent}>
            <img className={styles.img} src="/images/cta-logo-one.svg" alt="" />
            <button className={styles.btn}>GET ALL THERE</button>
            <p className={styles.parg}>The Disney Plus Premier Access fee is $30 in the US. In order to buy a Premier Access movie on Disney Plus, you also need to have a Disney Plus subscription, which costs $8 a month or $80 a year. It's not clear if Disney Plus will stick with the $30 pricing for all Premier Access movies in the future</p>
            <img className={styles.img2} src="/images/cta-logo-two.png" alt="" />
        </div>
    )
}

export default loginContent
