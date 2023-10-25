import React, { useEffect } from 'react'
import SideBar from '../../Components/Sidebar/SideBar'
import Header from '../../Components/Header/Header'
import Content from '../../Components/Content/Content'



const LayoutContainer = () => {

  return (
    <div className='layout-page'>
        <SideBar/>
        <Header/>
        <Content/>
        
    </div>
  )
}

export default LayoutContainer