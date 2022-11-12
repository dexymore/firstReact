import React from 'react'
import footerStyles from './footer.module.css'
function Footer() {
    let boot='row overflow-hidden'
  return (
<>
<div className={footerStyles.fixed}>
<div className={footerStyles.foot}>
<div className={`${boot} `}>
<div className='col-md-4  text-center'>
 <h2>LOCATION</h2>
<p>2215 John Daniel Drive
Clark, MO 65243</p>
</div>
<div className='col-md-4  text-center'><h2>ARROUND THE WEB</h2>
<i className="fa-brands fa-facebook fa-2x"></i>
<i className="fa-brands fa-twitter fa-2x"></i>
<i className="fa-brands fa-linkedin fa-2x"></i>
</div>
<div className='col-md-4  text-center'><h2>ABOUT FREELANCER</h2>
<p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p></div>
</div>

</div>
<div className={footerStyles.love}>

<h3>made with ❤️ by <span><a href="https://www.facebook.com/ahmfd22" target="_blank">ahmed fathy</a></span></h3>
</div>
</div>

</>
  )
}

export default Footer