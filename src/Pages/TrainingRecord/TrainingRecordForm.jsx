import React from 'react'
import ARROW from '../../Assets/rightarrow.png'
import { NavLink } from 'react-router-dom'

const TrainingRecordForm = () => {
  return (
    <div className='training-r-form'>
        <div className='training-form-back'>
        <div className='back-btn'><NavLink to={"/trainingrecord"}><img  className='Tfback-icon' src={ARROW}/></NavLink></div>
        <div className='back-title'>Add Training Record</div>
        </div>
       
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
             <div className='t-form-row-2'>
             <div className='input-wrapper'>
                <label>Mgt.staff</label>
                <input type='text' className='input-training-form'></input>
            </div>
            <div className='input-wrapper'>
                <label>JMS</label>
                <input type='text' className='input-training-form'></input>
            </div>
            <div className='input-wrapper'>
                <label>Staff/artisan staff</label>
                <input type='text' className='input-training-form'></input>
            </div>
             </div>
           <div className='t-form-row-3'>
           <div className='input-wrapper'>
                <label>Workmen (perm+artsaft+LabSup)</label>
                <input type='text' className='input-training-form'></input>
            </div><div className='input-wrapper'>
                <label>Causals /migrants</label>
                <input type='text' className='input-training-form'></input>
            </div><div className='input-wrapper'>
                <label>Mgt.staff</label>
                <input type='text' className='input-training-form'></input>
            </div>
           </div>
           <div className='t-form-row-3'>
           <div className='input-wrapper'>
                <label>Mode of training</label>
                <select className='select-input'>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </div>
            <div className='input-wrapper'>
                <label>Duration of training(Minutes)</label>
                <input type='text' className='input-training-form'></input>
            </div>
            <div className='input-wrapper'>
                <label>Training conducted by(Name)</label>
                <input type='text' className='input-training-form'></input>
            </div>
            
            </div> 
            <div className='t-form-row-4'>
            <div className='input-wrapper'>
                <label>Training Man-Hours</label>
                <input type='text' className='input-training-form'></input>
            </div>
            <div className='input-wrapper'>
                <label>Remarks</label>
                <input type='text' className='input-training-form'></input>
            </div>
            </div> 
            <div className='t-form-row-5'>
            <div className='input-wrapper-des'>
                <label>Description of the training/Training Topic</label>
                <input type='text' className='input-training-description'></input>
            </div>
            </div>
            
        </form>
        <div className='t-form-bottom'>
            <div className='tf-cancel'><p className='atr-cancel'>cancel</p></div>
            <div className='tf-addtraining'><button className='atr-btn'>Add Training Record</button></div>
        </div>
        
    </div>
  )
}

export default TrainingRecordForm