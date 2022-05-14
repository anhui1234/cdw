import React from 'react'
import  Hinh from "../Logoreact/about.jpg"
import "../Containercss/About.css"
function About() {
    return (
        <>
       <div className='imageTop' style={{backgroundImage:`url(${Hinh})`}}>
       </div>
       <div className='texta'>
            <h1>Về chúng tôi</h1>
       </div>
       <div className='te'>
           <h2>
               Chúng tôi luôn đem đến sản phẩm với mức giá và chất lượng tốt nhất cho khách hàng
           </h2>
       </div>
       </>
    )
}
  export default About;