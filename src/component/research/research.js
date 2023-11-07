import React from 'react'
import Image from 'react-bootstrap/Image';
import "./research.css"
import { Link, NavLink, Outlet } from 'react-router-dom';
const Research = () => {
  return (
    <>
    <Image data-aos="zoom-in-up" src="/./images/research/ttm-pagetitle-bg.jpg" fluid />
    <ResearchRoutes/>
    </>
  )
}

export default Research

const ResearchRoutes = () => {
    return(
      <div className='research'>
        <div className='tabs'>
            <NavLink to="all">All</NavLink>
            <NavLink to="cardiology">Cardiology</NavLink>
            <NavLink to="oncology">Oncology</NavLink>
            <NavLink to="orthopedics">Orthopedics</NavLink>
            <NavLink to="pharmacy">Pharmacy</NavLink>
            <NavLink to="anesthesiology">Anesthesiology</NavLink>
            <NavLink to="pediatric">Pediatric</NavLink>
        </div>
        <Outlet/>
      </div>
    )
}