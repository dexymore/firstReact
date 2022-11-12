import React from "react";
import popStyles from "./portofolio.module.css";
const Popup = ({ open ,picture, onclose,picindex}) => {
console.log(picture)
console.log(picindex)
  if (!open)
   {return null
}
 else{
{}    
    return(<>
<div className={popStyles.modal}>
    <button className={popStyles.closeButton} onClick={onclose}>&times;</button>
<h1>PORTOFOLIO</h1>
<div className={popStyles.lines}><i className="fa-solid fa-2x fa-star"></i></div>
<img src={picture[picindex-1]}></img>
<div >
<p className={popStyles.para}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maiores dolorem culpa consequuntur, quae quia at sint, iusto rerum et cupiditate pariatur, impedit dicta! Sunt!</p>

<button className="btn  bg-danger" onClick={onclose}> close</button>
</div>
</div>

<div className={popStyles.overlay} onClick={onclose}></div>


</>)}
};

export default Popup;
