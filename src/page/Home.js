import React from 'react'
import banner from "../Logoreact/qc.jpg"
import "../Containercss/Home.css"
import IMAGES from "../ProductFeature.js"
function Home() {
  return (
    <>
      <div className='homekt' style={{backgroundImage:`url(${banner})`}}>
      </div>
      <div className='homesp'>
        <h1 className='menuTitle'>Sản phẩm nổi bật</h1>
      </div>
      <div className='productfea'>
          {
              IMAGES&&IMAGES.map((item)=>
              <div key={item.id} >
                <img src={item.image} className="logo" alt=""/>
                <h3>{item.title}</h3>
              </div>
              )
          }
      </div>
    </>
  );
}

export default Home