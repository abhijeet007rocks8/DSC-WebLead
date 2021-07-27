import React from 'react'
import styles from './style.module.scss'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.text}>
                <div className={styles.heading}>
                    Save your data storage here.
                </div>
                <div className={styles.details}>
                    Data Warehouse is a data storage area that has been
                    tested for security, so you can store your data here
                    safely but not be afraid of being stolen by others.
                </div>
                <span className={styles.button}>
                    <p className={styles.learnMore}>Learn More</p>
                </span>
            </div>

            <div className={styles.img}>
                <img src="/assets/header.png" width="100%" height="auto" alt="header"/>
            </div>

        </div>
    )
}
