import React from 'react'
import styles from './style.module.scss'
import {BsArrowRight} from 'react-icons/bs'


function Card(Data){
    return(
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={Data.imgPath} width="100%" height="auto" alt="card image"/>
            </div>
            <div className={styles.info} style={{backgroundImage:`${Data.bgColor}`}}>
                <div className={styles.title}>{Data.heading}</div>
                <div className={styles.subtitle}>{Data.subHeading}</div>
                <div className={styles.learnMore}>
                    <p className={styles.learn}>Learn More</p>
                    <BsArrowRight/>
                </div>
            </div>
        </div>
    )
}
export default function Features() {
    return (
        <div className={styles.features}>
            <div className={styles.heading}>Features</div>
            <div className={styles.subheading}>
                Some of the features and advantages 
                that we provide for those of you who store 
                data in this Data Warehouse.
            </div>
            <div className={styles.grid}>
            
            <Card imgPath="assets/feature1.png" heading="Search Data" subHeading="Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time." bgColor="url('/assets/f1bg.png')"/>
            <Card imgPath="assets/feature2.png" heading="24 Hour Access" subHeading="Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent." bgColor="url('/assets/f2bg.png')"/>
            <Card imgPath="assets/feature3.png" heading="Print Out" subHeading="Print out service gives you convenience if someday you need print data, just edit it all and just print it." bgColor="url('/assets/f3bg.png')"/>
            <Card imgPath="assets/feature4.png" heading="Security Code" subHeading="Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file." bgColor="url('/assets/f4bg.png')"/>

            </div>
        </div>
    )
}
