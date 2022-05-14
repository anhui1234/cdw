import React from 'react'
import Logo from "../Logoreact/Logo.png"
import {Link} from "react-router-dom"
import "../Containercss/Header.css"
import SearchIcon from "@material-ui/icons/Search";
function Header() {
  return (
    <div className='backgroundheader'>
            <img src={Logo}/>
        <div className='center'>
          <Link to="/" style={{ textDecoration: 'none' }}>Trang chủ</Link>
          <Link to="/sanpham" style={{ textDecoration: 'none' }}>Sản phẩm</Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>Về chúng tôi</Link>
        </div>
        <div className='right'>
            <div id="searchbox">
              <input type="text" placeholder='Nhập sản phẩm cần tìm kiếm' id="search-text"></input>
              <button type='submit' id="search-icon" ><SearchIcon/></button>
            </div>
        </div>
    </div>
  )
}

export default Header