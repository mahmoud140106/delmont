import React from 'react'
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import'./slides.css';
import'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Link} from 'react-router-dom';
import data from '../../data/users.json';
const Slides = () => {
  return (
    <>
    <section className='slider-section' data-aos="zoom-in">
      <div className='slider-container'>
        <div className='slider-head'>
          <p>MEET OUR EXPERIENCED TEAM</p>
          <h3>Our Dedicated Doctors Team</h3>
          <p>We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our staff, We are all work together to help our all patients for recovery</p>
        </div> 
 
        <Swiper
            spaceBetween={20} 
            breakpoints = {{
              1024: {
                  slidesPerView: 4,
              },
              768: {
                  slidesPerView: 2,
              },
              450: {
                  slidesPerView: 1,
              }
            }}
        >
        {data.map((user)=>(
          <SwiperSlide key={user.id}>
              <div className='card' data-aos="zoom-in-up">
                <div><img src={user.image} alt='img card'/>
                <div class="content">
                  <Link to={`/user/${user.id}`}>+</Link>
                </div>
                </div>
                <p>{user.department}</p>
                <h2>{user.name}</h2>
              </div>
            </SwiperSlide>
          ))
        }
        <SliderButtons />
        </Swiper>
      </div>
    </section>
    </>
  )
}

export default Slides

const SliderButtons = () => {
    const swiper = useSwiper();
    return(
      <div className='buttons'>
        <button className="fa-solid fa-chevron-left" onClick={()=> swiper.slidePrev()}></button>
        <button className="fa-solid fa-chevron-right" onClick={()=> swiper.slideNext()}></button>
      </div>
    )
}