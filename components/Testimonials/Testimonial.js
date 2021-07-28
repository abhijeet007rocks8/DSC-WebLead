import React,{useState,useEffect} from 'react'
import styles from './style.module.scss'
import {BsArrowRight,BsArrowLeft} from 'react-icons/bs'


function SlideCard(props){
    return(
        <div className={styles.slidecard} id={props.id}>
            <div className={styles.profileImg}>
                <img src={props.imgPath} width="70px" height="70px" alt="profile image" />
            </div>

            <div className={styles.profileDetails}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.link}><a href={props.link} target="_blank" rel="noreferrer" >{props.link}</a></div>
                <div className={styles.about}>{props.about}</div>
            </div>
        </div>
    )
}

export default function Testimonial() {
    const [Index,setIndex]=useState(0)
    
    const Dummy=()=>{}

    const Left=()=>{
        console.log("left clicked")    
        if(Index>0) {
            for(let i=0;i<4;i++){ 
            const slidecard=document.querySelector('#Card'+i);
            slidecard.setAttribute('style', `transform: translateX(${(Index-1)*-610}px)`);   
            }
        }
        setIndex(Index-1)
    }


    const Right=()=>{
        console.log("right clicked")
        if(Index<3){
            if(Index<0) setIndex(0)
         setIndex((Index+1));
         for(let i=0;i<4;i++){ 
            const slidecard=document.querySelector('#Card'+i);
            slidecard.setAttribute('style', `transform: translateX(${(Index+1)*-610}px)`);
            }        
        }
    }
    return (
        <div className={styles.testimonial}>
            <h2 className={styles.heading}>Testimonials</h2>
            <div className={styles.cardSlider}>
                <SlideCard imgPath="/assets/test1.png" name="John Fang" link="wordfaang.com"  about="Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla." id='Card0' />
                <SlideCard imgPath="/assets/test2.png" name="Jenny Doe" link="www.facebook.com"  about="Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla." id='Card1'/>
                <SlideCard imgPath="/assets/test3.png" name="Walter Wright" link="www.facebook.com"  about="Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla." id='Card2'/>
                <SlideCard imgPath="/assets/test1.png" name="John Fang" link="www.facebook.com"  about="Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla." id='Card3'/>
            </div>
            <div className={styles.last}>
                <div className={styles.activedots}>
                    <span className={(Index<=0)?styles.activedot:styles.dot}></span>
                    <span className={(Index==1)?styles.activedot:styles.dot}></span>
                    <span className={(Index==2)?styles.activedot:styles.dot}></span>
                    <span className={(Index==3)?styles.activedot:styles.dot}></span>
                </div>
                <div className={styles.arrows}>
                    <BsArrowLeft color="#ffffff"  onClick={(Index>0)?Left:Dummy} style={(Index>0)?{fontSize:'2rem',marginRight:'0.5rem'}:{marginRight:'0.5rem'}}/>
                    <BsArrowRight color="#ffffff" onClick={Right} style={(Index!=3)?{fontSize:'2rem'}:{}}/>
                </div>
            </div>
        </div>
    )
}
