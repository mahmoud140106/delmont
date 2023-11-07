import React from 'react'
import"./home.css"
import Landing from './landing'
import Icons from './icons'
import Image from 'react-bootstrap/Image';
import Counterup from './countup';
import Slides from './slides/slides';
const Home = () => {
  return (
    <>
    <Landing 
    slide1 = "./images/slides/coronavirus-banner-01.jpg" 
    slide2 = "./images/slides/coronavirus-banner-02.jpg" 
    slide3="./images/slides/slider-mainbg-001.jpg"/>
    <Icons/>
    <div className='img-count'>
    <Image data-aos="fade-right" src="./images/row-bgimage-6.jpg" fluid />
    <Counterup/>
    </div>
    <Slides/>
    </>
  )
}

export default Home