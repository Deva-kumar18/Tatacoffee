import React from 'react'
import { Outlet } from 'react-router-dom'

const Content = () => {
  return (
    <div className='display-content'><Outlet/></div>
  )
}

export default Content