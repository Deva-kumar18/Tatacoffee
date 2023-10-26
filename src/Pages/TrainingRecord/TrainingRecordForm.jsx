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
                <label className='atr-form-lbl'>Date</label>
                <input type="date" className='input-training-form' ></input>
            </div>
            <div className='input-wrapper'>
                <label className='atr-form-lbl'>Division</label>
                <select className='select-input'>
                    <option></option>
                    <option>PMD</option>
                    <option>PMD</option>
                    <option>Pmd</option>
                </select>
            </div>
            <div className='input-wrapper'>
                <label className='atr-form-lbl'>Total Number of emplyees on the roll</label>
                <input type='text' className='input-training-form'></input> 
            </div>
            </div>
             <div className='t-form-row-2'>
             <div className='input-wrapper'>
                <label className='atr-form-lbl'>Mgt.staff</label>
                <input type='text' className='input-training-form'></input>
            </div>
            <div className='input-wrapper'>
                <label className='atr-form-lbl'>JMS</label>
                <input type='text' className='input-training-form'></input>
            </div>
            <div className='input-wrapper'>
                <label className='atr-form-lbl'>Staff/artisan staff</label>
                <input type='text' className='input-training-form'></input>
            </div>
             </div>
           <div className='t-form-row-3'>
           <div className='input-wrapper'>
                <label className='atr-form-lbl'>Workmen (perm+artsaft+LabSup)</label>
                <input type='text' className='input-training-form'></input>
            </div><div className='input-wrapper'>
                <label className='atr-form-lbl'>Causals /migrants</label>
                <input type='text' className='input-training-form'></input>
            </div><div className='input-wrapper'>
                <label className='atr-form-lbl'>Mgt.staff</label>
                <input type='text' className='input-training-form'></input>
            </div>
           </div>
           <div className='t-form-row-3'>
           <div className='input-wrapper'>
                <label className='atr-form-lbl'>Mode of training</label>
                <select className='select-input'>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </div>
            <div className='input-wrapper'>
                <label className='atr-form-lbl'>Duration of training(Minutes)</label>
                <input type='text' className='input-training-form'></input>
            </div>
            <div className='input-wrapper'>
                <label className='atr-form-lbl'>Training conducted by(Name)</label>
                <input type='text' className='input-training-form'></input>
            </div>
            
            </div> 
            <div className='t-form-row-4'>
            <div className='input-wrapper'>
                <label className='atr-form-lbl'>Training Man-Hours</label>
                <input type='text' className='input-training-form'></input>
            </div>
            <div className='input-wrapper'>
                <label className='atr-form-lbl'>Remarks</label>
                <input type='text' className='input-training-form'></input>
            </div>
            </div> 
            <div className='t-form-row-5'>
            <div className='input-wrapper-des'>
                <label className='atr-form-lbl'>Description of the training/Training Topic</label>
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