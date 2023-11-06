import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import"./home.css"
import Carousel from 'react-bootstrap/Carousel';
import Caption from './caption';
const Landing = (props) => {
  return (
    <>
    <Carousel interval={6000}>
      <Carousel.Item>
        <img src= {props.slide1} alt= {props.slide1} />
        <Caption caption="COVID-19 CORONA-VIRUS DISEASE 2019."/>
      </Carousel.Item>

      <Carousel.Item>
        <img src= {props.slide2} alt= {props.slide2} />
        <Caption caption="WE GIVE YOU THE BEST!"/>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Landing