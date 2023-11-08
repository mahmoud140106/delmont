import React, { useState } from 'react'
import CountUp from 'react-countup';
const Counterup = () => {
    const[count,setCount]=useState([
        {icon:"fa-solid fa-trophy",     title:"Award Win",      start:"100", end:"201"},
        {icon:"fa-solid fa-user",       title:"Qualified Staff",start:"250", end:"354"},
        {icon:"fa-solid fa-heart-pulse",title:"Machines",       start:"50",  end:"124"},
        {icon:"fa-solid fa-tv",         title:"Hospital Rooms", start:"3900",end:"4012"},
        {icon:"fa-solid fa-thumbs-up",  title:"Happy Patients", start:"6850",end:"7015"},
        {icon:"fa-solid fa-eraser",     title:"Suppliers",      start:"150", end:"254"},
      ])
  return (
    <>
    <div className='countup' data-aos="fade-left">
        <p>about medical</p>
        <h3>Powered By Over 1,503 Patients Trust Us With Their Sweet Love.</h3>
        <div className='count-container'>
        {
        count.map((counting)=>(
            <div key={counting.title} className="count-box">
                <div className="count-icon">
                    <i className={counting.icon}></i>
                </div>
                <div className="count-title">
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

export default Counterup