import React from 'react'

const Footer = (props) => {
  return (
   
    <div className="container">
    <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
      <div className=" d-flex align-items-center">
        
        <span className={`mb-3 mb-md-0 fs-4 text-${props.mode==="light"? "black":"white"}`}>&copy; 2023 Text Utils , Inc</span>
      </div>
  
     
    </footer>
  </div>

    
  )
}

export default Footer
