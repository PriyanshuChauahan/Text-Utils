import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import { useState } from 'react';


export default function Navbar(props) {
  const [isActive,setIsActive]=useState(true);
  return (

    <>
    <nav className={`navbar navbar-expand-lg bg-${props.mode==="light"? "primary":"secondary"}}`}  data-bs-theme = {`${props.mode}` }>
  <div className="container-fluid">
    
    <Link className="navbar-brand" to={'/'}>{props.title}</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${isActive? "active":""} `} aria-current="page" to={'/'}
          onClick={()=>setIsActive(true)}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${!isActive? "active":""}`} to={'/about'}
          onClick={()=>setIsActive(false)}
          >About</Link>
        </li>
       </ul>
      
      <div className={`d-flex ${props.mode==='light'? 'invisible':'visible'}`}>
 <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
 <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
 <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
 <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
  
</div>
      <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
  <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'? 'dark':'light'} Mode</label>
</div>
    </div>
  </div>
</nav>
    </>
  )
}
Navbar.propTypes={title:PropTypes.string.isRequired}
Navbar.defaultProps={
    title:"Set Title here"
}
