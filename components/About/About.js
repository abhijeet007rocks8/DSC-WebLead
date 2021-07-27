import React from 'react'
import styles from './style.module.scss'

export default function About() {
    return (
        <div className={styles.about}>
            <div className={styles.left}>
                <img src="/assets/about.png" width="100%" height="auto" alt="about uS" />
            </div>

            <div className={styles.right}>

                <div className={styles.heading}>
                    We are a high-level data storage bank
                </div>

                <div className={styles.subheading}>
                    The place to store various data that you can 
                    access at any time through the internet and 
                    where you can carry it. This very flexible 
                    storage area has a high level of security. 
                    To enter into your own data you must enter 
                    the password that you created when you registered 
                    in this Data Warehouse.
                </div>

            </div>

        </div>
    )
}
