import React, {  } from 'react'

function PersonalInfo({formData, 
                      setformData, 
                      error,
                      setError, 
                      border_name,
                      border_email,
                      border_num,
                      mystyle,
                      mystyle_email,
                      mystyle_num
                    }) {
  return (
    <form action="" >
                <label htmlFor="name" id='name'>Name</label><br/>

                    {error&&formData.name.length <=0?
                    <div className='field' style={mystyle}>This field is required</div>:''}
                  <input  id='name' placeholder='name' style={border_name} value={formData.name}
                     onChange={(event)=>{
                      setformData({...formData, name:event.target.value})
                    }}/>
                     <br />  
                <label htmlFor="email">Email Address</label><br/>  
                    {error &&formData.email.length <=0?
                <div className='field2' style={mystyle_email}>This field is required</div>:''}
                    <input type="email" id='email' style={border_email} placeholder='email' value={formData.email}
                    onChange={(event)=>{
                      setformData({...formData, email:event.target.value})
                    }}/>  <br /> 
                <label htmlFor="number">Phone Number</label><br/>
               
                  {error && formData.number.length<1?
                <div className='field3' style={mystyle_num}>This field is required</div>:''}
                <input type="number" id='number' style={border_num}  placeholder='eg +1 234 567 890' value={formData.number}
                onChange={(event)=>{
                  setformData({...formData, number:event.target.value})
                }}/><br />
    
                </form>                
  )
}
export default PersonalInfo