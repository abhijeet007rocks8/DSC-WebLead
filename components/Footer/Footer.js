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
        <div className={styles.license}>
            <div className={styles.copyright}>
            © Datawarehouse™, 2020. All rights reserved.<br/>
            Company Registration Number: 21479524.
            </div>
            <div className={styles.chat}>
                <img src="/assets/chat.png" width="80%" height="auto" alt="chatbot" />
            </div>
        </div>
    )
}

function Socials(){
    return(
    <div className={styles.social}>
        
        <div className={styles.address}>
            <div className={styles.heading}>
                <div><img src="/assets/logo.png" width="70%" height="auto" alt="logo"/></div>
                <div className={styles.title}>Data Warehouse</div>
            </div>
            
            <div className={styles.text} style={{fontWeight:'500'}}>Warehouse Society, 234<br/>
                Bahagia Ave Street 
                PRBW 29281</div>

            <div className={styles.text}>info@warehouse.project<br/>
                 1-232-3434 (Main)</div>

        </div>
        
        <div className={styles.list}>
            <div className={styles.heading}>About</div>
            <div className={styles.listItems}>Profile</div>
            <div className={styles.listItems}>Features</div>
            <div className={styles.listItems}>Careers</div>
            <div className={styles.listItems}>DW News</div>
        </div>
        
        <div className={styles.list}>
            <div className={styles.heading}>Help</div>
            <div className={styles.listItems}>Support</div>
            <div className={styles.listItems}>Sign Up</div>
            <div className={styles.listItems}>Guide</div>
            <div className={styles.listItems}>Reports</div>
            <div className={styles.listItems}>Q&A</div>
        </div>
        
        <div className={styles.socialMedia}>
            <div className={styles.heading}>Social Media</div>
            <div className={styles.icons}>
                <div className={styles.socialIcon}>
                    <img src="/assets/fb.png" width="70%" height="auto" alt="facebook"/>
                </div>
                <div className={styles.socialIcon}>
                    <img src="/assets/twi.png" width="70%" height="auto" alt="twitter"/>
                </div>
                <div className={styles.socialIcon}>
                <img src="/assets/insta.png" width="70%" height="auto" alt="instagram"/>
                </div>
            </div>
        </div>

    </div>
    )
}

export default function Footer() {
    return (
        <div className={styles.footer}>
        <TryOut/>
        <Socials/>
        <License/>
        </div>
    )
}
