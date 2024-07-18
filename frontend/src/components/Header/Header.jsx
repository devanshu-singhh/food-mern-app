import React from 'react'
import './Header.css'
import { useState } from 'react';

const Header = () => {

  const [menu,setMenu] = useState("home");

  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Best food for your taste !!</h2>
            <p>“Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.”</p>
            <button><a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>View Menu</a></button>
        </div>
    </div>
  )
}

export default Header