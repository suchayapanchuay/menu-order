import React from 'react'
import SubHead from './SubHeading'
import MenuItem from './MenuItem'
import data from './data'
import './css/SpecialMenu.css'
const SpecialMenu = () => {
  return (
    <div className='app_specialMenu flex_center section_padding' id='specialmenu'>
      <div className='app_specialMenu-title'>
        <SubHead title="Menu you must try"/>
        <h1 className='headtext_comorant'>Today SpecialMenu</h1>
      </div>
      <div className='app_specialMenu-menu'>
        <div className='app_specialMenu-americano flex_center'>
          <p className='app_specialMenu-heading'>Coffee & Matcha</p> 
          <div className='app_specialMenu-menu-item'>
            {data.coffeeAndMatcha.map((coffeeAndMatcha,index) => (
              <MenuItem key={coffeeAndMatcha.title + index} title={coffeeAndMatcha.title} price={coffeeAndMatcha.price}/>
            ))}
          </div>
        </div>
      </div>
      <div className='app_specail-img'>
        <img src="https://i.pinimg.com/564x/c3/77/cd/c377cd9f85803969d871f8b617b11112.jpg" alt="" />
      </div>
      <div className='app_specail-img1'>
        <img src="https://i.pinimg.com/564x/55/a8/31/55a8313ea7a728f6896a515aff8292dd.jpg" alt="" />
      </div>
      <div className='app_specail-img2'>
        <img src="https://i.pinimg.com/564x/00/3f/d4/003fd40afeca705c8f4fb689bd0a8bd7.jpg" alt="" />
      </div>
    </div>
  )
}

export default SpecialMenu
