import React from 'react'
import './css/Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu } from 'react-icons/md';

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = React.useState(false);
  return (
    <nav className='app_navbar'>
      <div className='app_navbar-logo'>
        Medium Cafe
      </div>
      <ul className='app_navbar-links'>
              <li className="open"><a href="#home">Home</a></li>
              <li className="open"><a href="#specialmenu">SpecialMenu</a></li>
              <li className="open"><a href="#menu">Menu</a></li>
              <li className="open"><a href="#contact">Contact</a></li>
              <li className="open"><a href="#comment">CreatPost</a></li>
      </ul>
      <div className='app_navbar-login'>
        <a href="#login" className='open'>Login / Register</a>
      <div/>
        <a href="#book" className='open'>Book Table</a>
      </div>
      <div className='app_navbar-smallscreen'>
        <GiHamburgerMenu color = "#fff" fontSize = {27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='app_navbar-smallscreen-overlay flex_center slide-bottom'>
            <MdOutlineRestaurantMenu  fontSize = {27} className = "overlay_close" onClick={() => setToggleMenu(false)}/>
            <ul className='app_navbar-smallscreen-links'>
              <li ><a href="#home" onClick={() => setToggleMenu(true)}>Home</a></li>
              <li ><a href="#menu" onClick={() => setToggleMenu(true)}>Menu</a></li>
              <li ><a href="#specialmenu" onClick={() => setToggleMenu(true)}>SpecialMenu</a></li>
              <li ><a href="#contact" onClick={() => setToggleMenu(true)}>Contact</a></li>
              <li ><a href="#comment" onClick={() => setToggleMenu(true)}>CreatPost</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
