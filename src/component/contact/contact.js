import React from 'react'
import"./contact.css"
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
const Contact = () => {
  return (
    <>
    <Image data-aos="zoom-in-up" src="/./images/research/ttm-pagetitle-bg.jpg" fluid />
    <Contactus/>
    <SimpleMap/>
    </>
  )
}

export default Contact
const Contactus = () => {
    const[icons,setIcons]=useState([
        {icon:"fa fa-map-marker",     title:"58 BalSouth Lane,Harward Street",    description:"NewYork 33025",animate:"fade-right"},
        {icon:"fa fa-phone",     title:"+123 456 78910 / 11",    description:"Have a question? call us now",animate:"fade-right"},
        {icon:"fa fa-envelope-o",title:"info@domainname.com",    description:"Need support? Drop us an email",animate:"fade-right"},
        {icon:"fa fa-clock-o",   title:"Mon – Sat 07:00 – 21:00",description:"We are open on",animate:"fade-right"},
      ])
    return(
      <div className='contactus'>
        <div className='contactus-container'>
            <div className='left-box' data-aos="fade-right">
                <h2>Do You want to Reach at the next Level of business Success?</h2>
                <h3>Book a Complimentary Appointment by Visiting or calling Us!</h3>
                <div className='top-contactus'>
                <div className='top-container-icons'>
                {
                icons.map((icon)=>(
                    <div key={icon.title} className="icons-box" >
                        <div className="icons-icon">
                            <i className={icon.icon}></i>
                        </div>
                        <div className="icons-title">
                            <h3>{icon.title}</h3>
                            <p>{icon.description}</p>
                        </div>
                    </div>
                ))
                }
                </div>
                </div>
                <div className="social">
                    <a href="/"><i className="fa fa-facebook"></i></a>
                    <a href="/"><i className="fa fa-twitter"></i></a>
                    <a href="/"><i className="fa fa-google-plus"></i></a>
                    <a href="/"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
            <div className='right-box'  data-aos="fade-left">
                <p>WHAT WE DO</p>
                <h2>Get In Touch</h2>
                <p>We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievpatients for recovery</p>
                <form>
                <div>
                <label htmlFor='name'><i className="fa-regular fa-user"></i></label>
                <input type='text' id='name'placeholder="Your Name"></input>
                </div>
                <div>
                <label htmlFor='number'><i className="fa-solid fa-mobile-screen"></i></label>
                <input type='text' id='number' placeholder="Cell Phone"></input>
                </div>
                <div>
                <label htmlFor='email'><i className="fa-regular fa-envelope"></i></label>
                <input type='email' id='email' placeholder="Email"></input>
                </div>
                <div>
                <label htmlFor='location'><i className="fa-solid fa-location-dot"></i></label>
                <input type='text' id='location' placeholder="Venue"></input>
                </div>
                <div>
                <label htmlFor='msg'><i className="fa-regular fa-message"></i></label>
                <textarea name="textarea" placeholder="Message" id='msg'></textarea>
                </div>
                <button type='button'>SEND MESSAGE</button>
                </form>
            </div>
        </div>
      </div>
    )
}
const SimpleMap=()=>{
    const defaultProps = {
      center: {
        lat: 30.7833666,
        lng: 30.9982536
      },
      zoom: 10
    };
  
    return (
      <div className="simpleMap" >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
