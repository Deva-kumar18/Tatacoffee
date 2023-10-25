import React from 'react'
import Tata from '../../Assets/tatacoffee.png'

import LoginPage from './LoginPage'



const Loginpages = () => {
  return (
    <div className='loogin'>
       <img className='img-tata' src={Tata}/>
       <div className='log-container'><LoginPage/></div>
       
    </div>
  )
}

export default Loginpages