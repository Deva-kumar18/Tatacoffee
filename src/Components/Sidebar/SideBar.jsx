import React from 'react'
import { SideBarData } from '../../constants/SideBarData'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


const SideBar = () => {
    const [isActive, setIsActive ] = useState(0)
  return (
    <div className='sidebar-container'>
        <h1 className='header'>TATACOFFEE LIMITED</h1>
        <ul className='sidebar-list'>
            {SideBarData?.map((val,index)=>{
              return<NavLink to={val.link}><li  className={isActive === index ? 'side-menu-active':'side-menu'} onClick={()=> setIsActive(index)} key={index} >
              <div className='side-tite'>{val.title}</div>
            </li></NavLink>
            
            })}
            
        </ul>

    </div>
  )
}

export default SideBar