import React from 'react'

const TrainingRecordForm = () => {
  return (
    <div className='training-r-form'>
        <form className='t-form'>
            <div className='t-form-row-1'>
            <div className='input-wrapper'>
                <label>Date</label>
                <input type="date" className='input-training-form' ></input>
            </div>
            <div className='input-wrapper'>
                <label>Division</label>
                <select className='select-input'>
                    <option></option>
                    <option>PMD</option>
                    <option>PMD</option>
                    <option>Pmd</option>
                </select>
            </div>
            <div className='input-wrapper'>
                <label>Total Number of emplyees on the roll</label>
                <input type='text' className='input-training-form'></input> 
            </div>
            </div>
          
            <div className='input-wrapper'>
                <label>Mgt.staff</label>
                <input type='text'></input>
            </div>
            <div className='input-wrapper'>
                <label>JMS</label>
                <input type='text'></input>
            </div>
            <div className='input-wrapper'>
                <label>Staff/artisan staff</label>
                <input type='text'></input>
            </div>
            <div className='input-wrapper'>
                <label>Workmen perm+artsaft+LabSup</label>
                <input type='text'></input>
            </div><div className='input-wrapper'>
                <label>Causals /migrants</label>
                <input type='text'></input>
            </div><div className='input-wrapper'>
                <label>Mgt.staff</label>
                <input type='text'></input>
            </div>
        </form>
        
    </div>
  )
}

export default TrainingRecordForm