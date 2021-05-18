import React , {useEffect, useState} from 'react'
import "./Nav.css"

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
      if(window.scrollY > 100) {
          handleShow(true);
      }else {
          handleShow(false)
      }
  }
  useEffect(()=>{
      window.addEventListener("scroll", transitionNavbar);
      return () => window.removeEventListener("scroll" , transitionNavbar)
  },[])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
            <img 
            className="nav_logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt=""/>
            <img
            className="nav_avatar"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiO_dFfH-DBaxYO5bS7XqmDb_nUUiRnNInXw&usqp=CAU" alt="Hel"/>
        
            </div>
         
            
        </div>
    )
}

export default Nav
