import React from 'react'
import Table from '../../Components/Table/Table'


const TrainingRecord = () => {
  return (
    <div className='training-container'><div className='cont-1'>
        <div className='row-1'><div className='tr-heading'>TRAINING RECORD</div><div className='tr-btn'><button className='training-rec'>Add Training Record</button></div>
    </div>
     <div className='cont-2'><div className='row-2'><div className='filter-section'><form className='filter' ><label>Divisin Filter</label>
    <select name="SelectDivision" id="SelectDivision">
    <option value="SelectDivision">SelectDivision</option>
    <option value="PMD">PMD</option>
    <option value="PMD/BLOW">PMD/BLOW</option>
    <option value="Mayiladudhurai{MLK}">Mayiladudhrai MLK</option>
    </select>
    </form>
    <form className='filter'>
        <label>month filter</label><input type="month"></input></form>
    </div><div className='import-section'>
    <from><select className='exp-sel'>
    <option value="export as">Export as</option> </select></from>
    <input type='search' placeholder='search'/></div></div></div></div>
    <Table/></div>
  )
}

export default TrainingRecord