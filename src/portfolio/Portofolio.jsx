import React ,{useState} from 'react'

import pic1 from '../portfolio/portfolio assets/1.png'
import pic2 from '../portfolio/portfolio assets/2.png'
import pic3 from '../portfolio/portfolio assets/3.png'
import pic4 from '../portfolio/portfolio assets/4.png'
import pic5 from '../portfolio/portfolio assets/5.png'
import pic6 from '../portfolio/portfolio assets/6.png'
import portoStyles from "./portofolio.module.css"
import Popup from './Popup'

function Portofolio() {
    let boot='row py-4 text-center container'
    let boot2='col-md-4 offeset-1'
let picsArray=[pic1,pic2,pic3,pic4,pic5,pic6]
   const [index,setindex]=useState(0)
const [pop, setpop] = useState(false)
  return (
   <div className={`${boot} ${portoStyles.porto}`}>
   <h2 className='h1 '> PORTOFOLIO</h2>
<div className={`${boot2} ${portoStyles.po}`} onClick={()=>{setindex(1);setpop(true) }}><img src={pic1}></img><div className={portoStyles.effect}></div></div>
<div className={`${boot2} ${portoStyles.po}`} onClick={()=>{setindex(2);setpop(true) }}><img src={pic2}></img><div className={portoStyles.effect}></div></div>
<div className={`${boot2} ${portoStyles.po}`} onClick={()=>{setindex(3);setpop(true) }}><img src={pic3}></img><div className={portoStyles.effect}></div></div>
<div className={`${boot2} ${portoStyles.po}`} onClick={()=>{setindex(4);setpop(true) }}><img src={pic4}></img><div className={portoStyles.effect}></div></div>
<div className={`${boot2} ${portoStyles.po}`} onClick={()=>{setindex(5);setpop(true) }}><img src={pic5}></img><div className={portoStyles.effect}></div></div>
<div className={`${boot2} ${portoStyles.po}`} onClick={()=>{setindex(6);setpop(true) }}><img src={pic6}></img><div className={portoStyles.effect}></div></div>
<Popup picture={picsArray} picindex={index} open={pop} onclose={()=>setpop(false)}></Popup>
   </div>

  )
}

export default Portofolio