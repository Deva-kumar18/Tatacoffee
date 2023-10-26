import React from 'react'
import User from '../../Assets/login.png'
import Heading from '../../Assets/Header.png'

const Header = () => {
  return (
    <div className='header-container'><div className='h-header'><img className='heading' src={Heading}/></div><img className='u-login' src={User}/></div>
  )
}

export default Header