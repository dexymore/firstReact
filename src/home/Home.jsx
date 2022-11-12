import React from 'react'
import avatar from './avataaars.svg'
import homeStyles from "./home.module.css"




function Home() {
  return (<>
<div className={homeStyles.hero}>
<div className={homeStyles.heroInfo}>
<img src={avatar} ></img>
<h1>START REACT</h1>
<div className={homeStyles.lines}><i className="fa-solid fa-2x fa-star"></i></div>
</div>
<p className={homeStyles.parahome}>Graphic Artist - Web Designer - Illustrator</p>
</div>     
</>
  )
}

export default Home