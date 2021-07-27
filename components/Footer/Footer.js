import React from 'react'
import styles from './style.module.scss'
import {BsArrowRight} from 'react-icons/bs'


function TryOut(){
    return(
        <div className={styles.tryout}>
            <div className={styles.left}>
                <span className={styles.heading}>Try for free!</span><br/>
                <span className={styles.subheading}>Get limited 1 week free try our features!</span>
            </div>

            <div className={styles.right}>
                <span className={styles.button}>
                    <p className={styles.text}>Learn More</p>
                </span>
            <div className={styles.requestdemo}>
                <span><p className={styles.text}>Request Demo</p></span>
                <span style={{marginTop:'4px'}}><BsArrowRight color="#212353" fontSize="1.3rem"/></span>
            </div>

            </div>
        </div>
    )
}

function License(){
    return(
        <>
        </>
    )
}

function Socials(){
    return(
    <>
    </>
    )
}

export default function Footer() {
    return (
        <>
        <TryOut/>
        <Socials/>
        <License/>
        </>
    )
}
