import React, { useState } from 'react'
import"./footer.css"
const Footer = () => {
  return (
    <>
    <TopFooter/>
    <Basic/>
    </>
  )
}

export default Footer




const TopFooter = () => {
    const[icons,setIcons]=useState([
        {icon:"fa fa-phone",     title:"+123 456 78910 / 11",    description:"Have a question? call us now",animate:"fade-right"},
        {icon:"fa fa-envelope-o",title:"info@domainname.com",    description:"Need support? Drop us an email",animate:"zoom-in-up"},
        {icon:"fa fa-clock-o",   title:"Mon – Sat 07:00 – 21:00",description:"We are open on",animate:"fade-left"},
      ])
    return(
        <div className='top-footer'>
            <div className='top-container'>
            {
            icons.map((icon)=>(
                <div key={icon.title} className="top-box" data-aos={icon.animate}>
                    <div className="top-icon">
                        <i className={icon.icon}></i>
                    </div>
                    <div className="top-title">
                        <h3>{icon.title}</h3>
                        <p>{icon.description}</p>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    )
}
const Basic = () => {
    return(
        <section className="Basic">
            <div className="Basic-container">
                <div className="Basic-box" data-aos="fade-right">
                    <h3>About Delmont</h3>
                    <p>Our Clinic has grown to provide a world class facility for the clinic advanced restorative dentistry.</p>
                    <p>We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                </div>
                <div className="Basic-box" data-aos="zoom-in-up">
                    <h3>Quick Links</h3>
                    <a href="/">Home</a>
                    <a href="/pages">Pages</a>
                    <a href="/research">Research</a>
                    <a href="/services">Services</a>
                    <a href="/blog">Blog</a>
                </div>
                <div className="Basic-box" data-aos="zoom-in-up">
                    <h3>Latest News</h3>
                    <div className="pic-container">
                        <img src="./images/blog/01.jpg" alt="" data-aos="fade-right" />
                        <img src="./images/blog/02.jpg" alt="" data-aos="fade-left"/>
                        <img src="./images/blog/03.jpg" alt="" data-aos="fade-right" />
                        <img src="./images/blog/01.jpg" alt="" data-aos="fade-left" />
                        <img src="./images/blog/02.jpg" alt="" data-aos="fade-right" />
                        <img src="./images/blog/03.jpg" alt="" data-aos="fade-left"/>
                    </div>
                </div>
                <div className="Basic-box" data-aos="fade-left">
                    <h3>Our Services</h3>
                    <div className="con-container">
                        <a href="/Surgery">Surgery</a>
                        <a href="/Psychological">Psychological</a>
                        <a href="/Cardiology">Cardiology</a>
                        <a href="/Orthopedics">Orthopedics</a>
                        <a href="/Pediatric">Pediatric</a>
                        <a href="/Oncology">Oncology</a>
                        <a href="/Anesthesiology">Anesthesiology</a>
                        <a href="/Dermatology">Dermatology</a>
                    </div>
                </div>
            </div>
            <h1 className="credit">
                copyright &copy;2023 all rights reserved | this template is made with <span>&#9825;</span> by <span>Mahmoud Amer</span>
            </h1>
        </section>
    )
}