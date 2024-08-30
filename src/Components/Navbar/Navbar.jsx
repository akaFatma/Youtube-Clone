import React from 'react'
import './Navbar.css'
import menuIcon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search.png'
import moreIcon from '../../assets/more.png'
import uploadIcon from '../../assets/upload.png'
import notificationIcon from '../../assets/notification.png'
import profileIcon from '../../assets/jack.png'
import { Link } from 'react-router-dom'

const Navbar = ({setSideBar}) => {
  return (
    <nav className='flex-div'> 
        <div className='flex-div nav-left'>
           
            <img  className ='menu-icon' src={menuIcon} alt=""  onClick={()=>{
                  return setSideBar((prev)=>prev === false ? true : false)
              }}/>
          
           <Link  to={'/'} ><img  className = 'logo' src={logo} alt="" /></Link> 
        </div>
        <div className="flex-div nav-middle">
            <div className="search-box flex-div">
            <input type="text" placeholder='Search' />
            <img src={searchIcon} alt="" />
            </div>
           
        </div>
        <div className="nav-right">
            <img src={uploadIcon} alt="" />
            <img src={moreIcon}alt="" />
            <img src={notificationIcon} alt="" />
            <img  className="user" src={profileIcon} alt="" />
        </div>
        </nav>
   
  )
}

export default Navbar