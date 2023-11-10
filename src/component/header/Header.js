import"./header.css"
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
        <Topbar/>
        <Mainheader/>
        <Bottombar/>
    </>
  )
}

export default Header

const Topbar = () => {
    return(
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
    )
}
const Mainheader = () => {
    const  menuhandler=()=>{
        document.querySelector('#menu-bar').classList.toggle('fa-times')
        document.querySelector('.navbar').classList.toggle('active')
      }
    // const  pageshandler=()=>{
    //     document.querySelector('#pages-icon').classList.toggle("fa-caret-down")
    //     document.querySelector('#pages-icon').classList.toggle("fa-caret-right")
    //   }
      window.onscroll =()=>{
        document.querySelector('#menu-bar').classList.remove('fa-times');
        document.querySelector('.navbar').classList.remove('active');
      }
    return(
        <div className="header">
        <header>
            <div id="menu-bar" className="fas fa-bars" onClick={menuhandler}></div>
            <Link to="/"  className="logo" title="Delmont"><img src="/./images/logo.png" alt="" /> </Link>
            <nav className="navbar">
                <NavLink to="/">Home</NavLink>
                {/* <NavLink to="/pages" className="pages" onFocus={pageshandler}> */}
                <NavLink to="/pages/aboutus" className="pages">
                    Pages <i id="pages-icon" class="fa-solid fa-caret-down"></i>
                    <div className="pages-container">
                        <NavLink to="/pages/aboutus">About Us</NavLink> 
                        <NavLink to="/pages/contactus">Contact Us</NavLink> 
                    </div>
                </NavLink>
                <NavLink to="/research/all">Research</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </nav>
            <div className="icon">
            <Link id="search" to="/search"><i className="fas fa-search"></i></Link>
            <Link to="/chart"><i className="fa-solid fa-cart-shopping fa-flip-horizontal"></i></Link>
            </div>
        </header>
        </div>
    )
}
const Bottombar = () => {
    return(
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
    )
}