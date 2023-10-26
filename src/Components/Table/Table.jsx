import React from 'react'
import Visibility from '../../Assets/visibility.png'
import Delete from '../../Assets/delete.png'
import Edit from '../../Assets/pencil.png'


const Table = () => {
  return (
    <div>
        <table >
            <tr className='tabler-heading' >
                <th>Date</th>
                <th>Division</th>
                <th>Total No.of Employees</th>
                <th>No of Participants</th>
                <th>Mode of Training</th>
                <th>Training Conducted by</th>
                <th>Action</th>
            </tr>
           <tr>
                <td>12/12/2012</td>
                <td>PMD</td>
                <td>100</td>
                <td>1000</td>
                <td>morning</td>
                <td>steve</td>
                <td ><div className='table-icon'><div className='t-icon'><img className='v-icon' src={Visibility }/></div><div className='t-icon'><img className='e-icon' src={Edit}/></div><div className='t-icon'><img className='d-icon' src={Delete}/></div></div></td>
            </tr>  
            <tr>
                <td>12/12/2012</td>
                <td>PMD</td>
                <td>100</td>
                <td>1000</td>
                <td>morning</td>
                <td>steve</td>
                <td ><div className='table-icon'><div className='t-icon'><img className='v-icon' src={Visibility }/></div><div className='t-icon'><img className='e-icon' src={Edit}/></div><div className='t-icon'><img className='d-icon' src={Delete}/></div></div></td>
            </tr>
            <tr>
                <td>12/12/2012</td>
                <td>PMD</td>
                <td>100</td>
                <td>1000</td>
                <td>morning</td>
                <td>steve</td>
                <td ><div className='table-icon'><div className='t-icon'><img className='v-icon' src={Visibility }/></div><div className='t-icon'><img className='e-icon' src={Edit}/></div><div className='t-icon'><img className='d-icon' src={Delete}/></div></div></td>
            </tr>
            <tr>
                <td>12/12/2012</td>
                <td>PMD</td>
                <td>100</td>
                <td>1000</td>
                <td>morning</td>
                <td>steve</td>
                <td ><div className='table-icon'><div className='t-icon'><img className='v-icon' src={Visibility }/></div><div className='t-icon'><img className='e-icon' src={Edit}/></div><div className='t-icon'><img className='d-icon' src={Delete}/></div></div></td>
            </tr> 
        </table>
    </div>
  )
}

export default Table