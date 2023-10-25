import React from 'react'
import User from '../../Assets/login.png'

const Header = () => {
  return (
    <div className='header-container'><h1 className='h-header'>TATA <span>COFFEE</span></h1><img className='u-login' src={User}/></div>
  )
}

export default Header