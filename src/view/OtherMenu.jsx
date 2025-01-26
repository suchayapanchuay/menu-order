import React from 'react'
import './css/OtherMenu.css'
import data from './data'
import SubHead from './SubHeading'
import MenuItem from './MenuItem'

const OtherMenu = () => {
    return(
    <div className='other-menu flex_center section_padding' id='menu'>
          <div className='other-menu-title'>
                    <SubHead title = 'Menu that fits your palatte'/>
                    <h1 className='head_text'>Menu & Other</h1>
          </div>
            <div className='other-menu-coffee'>
                <div className='other-menu-coffee_menu flex_center'>
                    <p className='ther-menu-coffee-heading'>Coffee</p>
                    <div className='ther-menu-coffee-item'>
                        {data.coffee.map((coffee,index) => (
                            <MenuItem key={coffee.title + index} title={coffee.title} price={coffee.price}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className='other-menu-matchaTea'>
                <div className='other-menu-matchaTea_menu flex_center'>
                    <p className='ther-menu-matchaTea-heading'>Matcha/Tea</p>
                    <div className='ther-menu-matchaTea-item'>
                        {data.matchaTea.map((matchaTea,index) => (
                        <MenuItem key={matchaTea.title + index} title={matchaTea.title} price={matchaTea.price}/>
                        ))}
                    </div>
                </div>
            </div>
          <div className='other-menu-food'>
            <div className='other-menu-food_menu flex_center'>
                <p className='ther-menu-food-heading'>Spaghetti/Pasta/Pesto</p>
                <div className='ther-menu-food-item'>
                    {data.Foods.map((food,index) => (
                        <MenuItem key={food.title + index} title={food.title} price={food.price}/>
                    ))}
                </div>
            </div>
        </div>
            <div className='menu-img1'>
                <img src="https://i.pinimg.com/474x/0f/df/7b/0fdf7b8fa03e0b570de04bd612d46792.jpg" alt="" />
            </div>
            <div className='menu-img2'>
                <img src="https://i.pinimg.com/474x/b9/90/07/b99007d15e2f2abfe32c6c8457aff544.jpg" alt="" />
            </div>
            <div className='menu-img3'>
                <img src="https://i.pinimg.com/474x/45/61/02/4561028eeec29e9f95a100dcc9fc50a0.jpg" alt="" />
            </div>
            <div className='menu-img4'>
                <img src="https://i.pinimg.com/474x/82/6a/9d/826a9db4c8b682d3d08ce855713eb8e9.jpg" alt="" />
            </div>
            <div className='menu-img5'>
                <img src="https://i.pinimg.com/564x/d5/4c/25/d54c25a53f347e55f902af0e0b54f59f.jpg" alt="" />
            </div>
            <div className='menu-img6'>
                <img src="https://i.pinimg.com/474x/8c/e3/d3/8ce3d3390a7a77bb916f0448ee39c006.jpg" alt="" />
            </div>
            <div className='menu-img7'>
                <img src="https://i.pinimg.com/474x/b1/fa/50/b1fa503f617c3405879aa79583d0de57.jpg" alt="" />
            </div>
        </div>
        
            
    )
}
export default OtherMenu
