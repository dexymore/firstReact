import React from 'react'
import aboutStyle from './about.module.css'
function About() {  
      let boot='container  '
  return (
<div className= {aboutStyle.theme}>
 <h1>ABOUT</h1>
 <div className={`${boot} ${aboutStyle.pads}`}>
<div className='row p-3'>
<div className='col-md-5'><p className={aboutStyle.aboutpara}>You can create your ou can create your own custom avatar foown custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
<div className='col-md-5'><p className={aboutStyle.aboutpara}>You can create your own ou can create your own custom avatar fo custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
</p></div>
</div>
 </div>  </div>
  )
}

export default About