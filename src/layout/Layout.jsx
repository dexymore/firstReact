import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar.jsx";
function Layout() {
  return (
    <>
<Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>
    </>
  )
}

export default Layout