import React, { useState } from 'react'
import"./about.css"
import Accordion from 'react-bootstrap/Accordion';
import CountUp from 'react-countup';
import Slides from '../home/slides/slides';
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'react-bootstrap/Image';

const About = () => {
  return (
    <>
    <Image data-aos="zoom-in-up" src="/./images/research/ttm-pagetitle-bg.jpg" fluid />
    <MyAccordion/>
    <AboutCount/>
    <Slides/>
    <AboutReview/>
    <ReviewIcons/>
    </>
  )
}

export default About
const MyAccordion = () => {
    const our="Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience."
  return (
    <>
    <div className='about'>
        <div className='about-container' data-aos="zoom-in">
            <div className='ab-img'><img src='/./images/single-img-four.png' alt=''/></div>
            <div className='about-content'>
                <p>WHAT WE DO</p>
                <h2>We Have 25 Years Experience</h2>
                <p>We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our stpatients for recovery</p>
                <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Our Mission</Accordion.Header>
                    <Accordion.Body>
                        <img src='/./images/blog/01.jpg' alt=''/>
                        {our}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Our Vision</Accordion.Header>
                    <Accordion.Body>
                        <img src='/./images/portfolio/01.jpg' alt=''/>
                        {our}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Our Stratagies</Accordion.Header>
                    <Accordion.Body>
                        <img src='/./images/portfolio/09.jpg' alt=''/>
                        {our}
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </div>
        </div>
    </div>
    </>
  )
}
const AboutCount = () => {
    const[count,setCount]=useState([
        {icon:"fa-regular fa-user",     title:"Clients",      start:"3200", end:"3215"},
        {icon:"fa-regular fa-hospital",       title:"Hospitals Rooms",start:"50", end:"152"},
        {icon:"fa-solid fa-heart-pulse",title:"Years of Experiance",       start:"0",  end:"30"},
        {icon:"fa-regular fa-thumbs-up",         title:"Qualified Staffs", start:"20",end:"124"},
      ])
  return (
    <>
    <div className='about-countup'>
        <div className='about-count-container'>
        {
        count.map((counting)=>(
            <div key={counting.title} className="about-count-box" data-aos="zoom-in">
                <div className="about-count-icon">
                    <i className={counting.icon}></i>
                </div>
                <div className="about-count-title">
                    <h3><CountUp delay={1} duration={10}  start={counting.start} end={counting.end}/></h3>
                    <p>{counting.title}</p>
                </div>
            </div>
        ))
        }
        </div>
    </div>
    </>
  )
}
const AboutReview = () => {
    const[review,Setreview]=useState([
        {image:"http://themetechmount.com/html/delmont/images/testimonial/01.jpg",     name:"RAshley Foster",      description:"Prior to my stay at Delmont, I was aware of their stellar reputation and multiple friends commented about how lucky I was to have my surgery scheduled there. As a result my expectations were high and yet the kind and professional staff with excellent patient care surpassed them."},
        {image:"http://themetechmount.com/html/delmont/images/testimonial/02.jpg",name:"Alan sears",description:"Great co workers, really good environment and excellent patient care. They are continuously innovating themselves which is why they remain a premier dental clinic.This was the cleanest medical establishment I've ever been in. They just loved the welcoming and warm atmosphere in there."},
        {image:"http://themetechmount.com/html/delmont/images/testimonial/03.jpg",     name:"Raymon Myers",      description:"The doctors and nurses and aides were excellent. The food was excellent. I am feeling fine and very lucky, back to my old self again and it feels great. Thank God for clinics such as yours. I appreciate all your kindness and good care you gave me is beyond my expectations they wonder for me."},
      ])
  return (
    <>
    <div className='aboutreview'>
        <div className='left-review' data-aos="fade-right">
            <p>CLIENTS</p>
            <h3>Happy Patients & Clients</h3>
            <p>CLIENTS Happy Patients & Clients If you need any industrial solution we are available for you. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href='/'>VIEW MORE DEATILS <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div>
            <Swiper className='right-review' data-aos="fade-left"
            modules={[Autoplay]}  
            autoplay={{delay: 4000, disableOnInteraction: false, }}
            
            spaceBetween={75} 
            breakpoints = {{
              1440: {
                  slidesPerView: 1,
              },
              1024: {
                  slidesPerView: 1,
              },
              768: {
                  slidesPerView: 1,
              },
              450: {
                  slidesPerView: 1,
              }
            }}
        >
        {
            review.map((review)=>(
                <SwiperSlide key={review.name} >
                <div className='review-avatar'>
                      <img src={`${review.image}`} alt={`${review.image}`}/>
                      <h3>{review.name}</h3>
                      <p>Patient</p>
                  </div>
                  <div className='review-caption'>
                      <p>{review.description}
                          <br/>
                          <span className="fa-solid fa-quote-right"></span>
                          </p>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                  </div> 
                  </SwiperSlide>
            ))
        }
        <ReviewButtons />
        </Swiper>
        </div>
    </div>
    </>
  )
}
const ReviewButtons = () => {
    const swiper = useSwiper();
    return(
      <div className='ReviewButtons'>
        <button className="fa-solid fa-arrow-left" onClick={()=> swiper.slidePrev()}></button>
        <button className="fa-solid fa-arrow-right" onClick={()=> swiper.slideNext()}></button>
      </div>
    )
}
const ReviewIcons = () => {
    return(
        <div className='ReviewIcons-container'>
             <div className='ReviewIcons'>
            <Image data-aos="zoom-in-up" src="/./images/client/client-01.png" fluid />
            <Image data-aos="zoom-in-up" src="/./images/client/client-02.png" fluid />
            <Image data-aos="zoom-in-up" src="/./images/client/single-img-four.png" fluid />
            <Image data-aos="zoom-in-up" src="/./images/client/client-01.png" fluid />
            <Image data-aos="zoom-in-up" src="/./images/client/client-02.png" fluid />
             </div>
        </div>
    )
}