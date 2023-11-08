import React, { useState } from 'react'
import 'aos/dist/aos.css';
const Icons = () => {
    const[iconBox,setIconBox]=useState([
        {basicicon:"fa-solid fa-hands-holding-child" ,        title:"Oral Care", description:"The Stronger Teeth"},
        {basicicon:"fa-solid fa-hand-holding-heart" ,         title:"Heal Body", description:"The Small carebear"},
        {basicicon:"fa-solid fa-truck-medical" ,              title:"Ambulance", description:"Shipping Via Air"},
        {basicicon:"fa-solid fa-prescription-bottle-medical" ,title:"Drug Store",description:"A retailer shop"},
        {basicicon:"fa-solid fa-eye" ,                        title:"Eye Care",  description:"Sharping vision"}
      ])
  return (
    <>
        <section className='icons-section' >
            <div className='icons-container'>
                {
                    iconBox.map((icon)=>(
                        <div key={icon.title} className='icons-box' data-aos="zoom-in-up">
                        <div className='basic-icon'>
                        <i className={icon.basicicon}></i>
                        </div>
                        <div className="title">
                            <h5>{icon.title}</h5>
                            <p>{icon.description}</p>
                        </div>
                        <div>
                            <a href="/" className="link">
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default Icons