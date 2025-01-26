import React from 'react'
import SubHead from './SubHeading'
import './css/Header.css'

const Header = () => {
  return (
    <div className='app_header app_wrapper section_padding' id='home' >
      <div className='app_wrapper_info'>
        <SubHead title = "Coffee makes you smile"/>
        <h1 className='app_header-h1'>Welcome to Caffeine</h1>
        <p className='open' style={{margin: '2rem 0'}}>We can bring you happiness through the intention of making coffee.</p>
      </div>
      <div className='app_wrapper_img'>
        <img src="https://i.pinimg.com/564x/d4/ce/5b/d4ce5b93d64b8e71664f41dfd78f27fe.jpg" alt="" />
      </div>
    </div>
  )
}

export default Header
