import React from 'react'
import Logo from "../Logoreact/Logo.png"
import "../Containercss/Footer.css"
function Footer() {
  return (
    <div className='footer'>
        <img src={Logo}/>
       <div className='te'>
         Người thực hiện: Huỳnh Ngọc Hiếu Quang & Tuấn
       </div>
    </div>
  )
}

export default Footer