import React from 'react'
import "./Header.css"
import {Navbar } from "react-bootstrap"
 
function Header() {
    return (
        <>
           <Navbar   collapseOnSelect expand="lg" bg="#b060d9" className="navbar">
               <div className="leftNav">
            <h1>  KHALEDS </h1>
               </div>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
               <div className="middle">
               
             
      <a href="#AboutMe">AboutMe</a>
      <a href="#MyProjects">MyProjects</a>
       <a href="#ContactMe">ContactMe</a>
     
  
               </div>
               <div className="rightNav">
               <img alt="socialmediaIcon" src="https://img.icons8.com/color/30/000000/linkedin.png"/>      
               <img alt="socialmediaIcon" src="https://img.icons8.com/color/30/000000/facebook-new.png"/>
               <img alt="socialmediaIcon" src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/>     
               <img alt="socialmediaIcon" src="https://img.icons8.com/color/30/000000/twitter--v1.png"/>
               </div>
  </Navbar.Collapse>
           </Navbar >
        </>
    )
}

export default Header
