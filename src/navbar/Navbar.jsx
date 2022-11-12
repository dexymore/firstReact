import React from 'react'
import navbarStyles from "./navbar.module.css"
import { Link } from "react-router-dom";
function Navbar() {


return(<>
<nav className="navbar overflowX-hidden navbar-expand-lg navbar-light " id={navbarStyles.navbarcolor}>
  <div className="container row">
  <div className='col-4 offset-2'>
  <div className='row'></div>

  <Link className="nav-link active"  to="/">SmartReact</Link>   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
 
    <div className="collapse navbar-collapse col-4 offset-4" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  to="portofolio">PORTOFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  to="About">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  to="Contact">CONTACT</Link>
        </li>
        
     </ul>
    </div>
  </div>
</nav>

</>);
}

export default Navbar