import"./header.css"
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
        <div className="topbar">
            <div className="topbar-container">
            <div className="left">
            <div><i className="fa-solid fa-location-dot"></i>234 Triumph, Los Angeles, California, US</div>
            <div><i className="fa-regular fa-clock"></i>Mon - Sat 8.00 - 18.00. Sunday CLOSED</div>
            </div>
            <div className="right">
            <a href="/"><i className="fa fa-facebook"></i></a>
            <a href="/"><i className="fa fa-twitter"></i></a>
            <a href="/"><i className="fa fa-pinterest-p"></i></a>
            <a href="/"><i className="fa fa-linkedin"></i></a>
            <a href="/" className="appointment">GET A APPOINTMENT!</a>
            </div>
            </div>
        </div>

        <div className="header">
        <header>
            <Link to="/" href="index.html" className="logo" title="Delmont"><img src="./images/logo.png" alt="" /> </Link>

            {/* <div id="icon" onClick={mode}>
            {show?<i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
            </div> */}
            <nav className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/pages">Pages</NavLink>
                <NavLink to="/research">Research</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <><i className="fas fa-search" id="search"></i></>
                <><i className="fa-solid fa-cart-shopping fa-flip-horizontal"></i></>
                
            </nav>
            {/* <div id="menu-bar" className="fas fa-bars" onClick={menuhandler}></div> */}
        </header>
        </div>

        <div className="bottombar">
            <div className="bottombar-container">
                <div className="header-box">
                    <div className="box-icon">
                        <i className="fa fa-hospital-o"></i>
                    </div>
                    <div className="box-content">
                        <h3>Number 1 Hospital</h3>
                        <p>In United States</p>
                    </div>
                </div>
                <div className="header-box">
                    <div className="box-icon">
                        <i className="fa fa-user-md"></i>
                    </div>
                    <div className="box-content">
                        <h3>Personal Cabinet</h3>
                        <p>Qualified Staff</p>
                    </div>
                </div>
                <div className="header-box">
                    <div className="box-icon">
                        <i className="fa fa-thumbs-o-up"></i>
                    </div>
                    <div className="box-content">
                        <h3>Get Result Online</h3>
                        <p>Satisfied Patients</p>
                    </div>
                </div>
            </div>

            <div className="box-contact">
                <span className="icon"><i className="fa fa-phone"></i></span>Toll Free : 1 123 456 78910
            </div>
        </div>
    </>
  )
}

export default Header