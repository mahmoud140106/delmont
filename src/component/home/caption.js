import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import MovingComponent from 'react-moving-text'

const Caption = (props) => {
  return (
    <>
        <Carousel.Caption>
        <p> <img src='/./images/slides/slider-icon001.png' alt='slider-icon001.png'></img>{props.caption}</p>
          <h3>
          <MovingComponent
            type="fadeInFromLeft"
            duration="2500ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            Take The <span>Worlds</span> Best <span>Virus</span> Treatments.
          </MovingComponent>
          </h3>
          <p>Need professional help? Our support staff will answer your questions. <br/> Visit us Now or Make an Appointment!</p>
          <MovingComponent
            type="fadeInFromBottom"
            duration="2500ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            <button type='button'>Make AN Appointment!</button>
          </MovingComponent>
        </Carousel.Caption>
    </>
  )
}

export default Caption