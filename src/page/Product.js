
import React from 'react'
import "../Containercss/Product.css"
import IMAGES from "../ProductListFeature.js"
function Product() {
    return (
        <>
        <div className='menu'>
            <h1 className='menuTitle'>Danh sách sản phẩm</h1>
        </div>
        <div className='menulist'>
              {
              IMAGES&&IMAGES.map((item)=>
              <div key={item.id}>
                    <img src={item.image} className='logo' alt=""/>
                    <h3>{item.title}</h3>
              </div>
              )}
            </div>
        </>
    )
}
  export default Product;