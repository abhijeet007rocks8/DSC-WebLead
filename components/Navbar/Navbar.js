import React from 'react'
import styles from './style.module.scss'
import {BsArrowRight} from 'react-icons/bs'

export default function Navbar() {
    return (
        <>
        <div className={styles.navbar}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <img src="/assets/logo.png" width="70%" height="auto" alt="logo"/>
                </div>

                <div className={styles.menu}>
                        <span className={styles.menuitem}>About</span>
                        <span className={styles.menuitem}>Help</span>
                        <span className={styles.menuitem}>Features</span>
                        <span className={styles.menuitem}>Signup</span>
                </div>
            </div>
            <div className={styles.requestdemo}>
                <span><p className={styles.text}>Request Demo</p></span>
                <span style={{marginTop:'8px'}}><BsArrowRight color="#212353" fontSize="1.3rem"/></span>
            </div>

        </div>
        </>
    )
}
