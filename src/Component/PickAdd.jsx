import React from 'react'
import './PickAdd.css'

function PickAdd({check,
                   handleChange, 
                   formData, 
                   setformData,
                   Activecheckbox,
                   setActivecheckbox}) {

  return (
    <div className='cont3'>
      <div className={check ==='online' ?"box2": "box" }>
        <input type="checkbox" className='checkb' onChange={()=>{handleChange('online')

        setformData({...formData, online:'online'})
        console.log(formData.online)}}
         value={formData.online}/>
        <div className="online">Online Service</div>
        <div className="access">Access to multiplayer games</div> 
        <div className="larger">+$1/mo</div>
      </div>

      <div className={ check==='larger' ?"box2": "box" }>
      <input type="checkbox" className='checkb' onChange={()=>{handleChange('larger')

    }} />
        <div className="online">Larger Storage</div>
        <div className="access">Extra 1TB of cloud save</div>       
        <div className="larger">+$2/mo</div>
      </div>

      <div className={ check==='custom' ?"box2": "box" } >
      <input type="checkbox" className='checkb' onChange={()=>{handleChange('custom')}}/>
        <div className="online">Customizable Profile</div>
        <div className="access">Custom theme on you profile</div>
        <div className="larger">+$2/mo</div>
      </div>
    </div>
  )
}

export default PickAdd;