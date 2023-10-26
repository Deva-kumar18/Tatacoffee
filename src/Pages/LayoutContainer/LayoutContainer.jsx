import React, { useEffect } from 'react'
import SideBar from '../../Components/Sidebar/SideBar'
import Header from '../../Components/Header/Header'
import Content from '../../Components/Content/Content'
import TrainingRecordForm from '../TrainingRecord/TrainingRecordForm'



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