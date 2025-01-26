import React from 'react'
import './css/Menuitem.css'

const MenuItem = ({title,price}) => (
  <div className='app_menuitem'>
    <div className='app_menuitem-head'>
      <div className='app_menuitem-name'>
        <p className='p_cormorant' style={{color:'#DCCA87'}}>{title}</p>
      </div>
      <div className='app_menuitem-dash' />
      <div className='app_menuitem-price'>
        <p className='p_cormorant'>{price}</p>
      </div>
    </div>
  </div>
);
export default MenuItem
