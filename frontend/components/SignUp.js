import React from 'react';
import styles from '../styles/Signup.module.css'

const Signup = () => {
    return (
        <div className={styles.authContainer}>
            <h1 className={styles.title}>Sign up to use TikSol (beta)</h1>
            <div className={styles.signupForm}>

                <div className={styles.inputField}>
                    <div className={styles.inputTitle}>Username:</div>
                    <div className={styles.inputContainer}>
                        <input className={styles.input} type='text' />
                    </div>
                </div>
                <div className={styles.inputField}>
                    <div className={styles.inputTitle}>Profile image:</div>
                    <div className={styles.inputContainer}>
                        <input className={styles.input} type='text' />
                    </div>
                </div>
                <div className={styles.loginButton}>Sign up</div>
            </div>






        </div>

    )
}

export default Signup