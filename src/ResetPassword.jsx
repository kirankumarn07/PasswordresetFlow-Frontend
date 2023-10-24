import React from 'react';
import { useState } from 'react'
import axios from 'axios';
import { Link,useNavigate,useParams } from 'react-router-dom';

function ResetPassword() {
    const [password,setPassword]=useState();
    const navigate=useNavigate()
    const {id,token}=useParams()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(`${import.meta.env.VITE_API_URL}/reset-password/${id}/${token}`,{password})
        .then(res=>{
            if(res.data.Status ==="Success"){
                navigate('/login')
            }
       
        }).catch(err=>console.log(err))

    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-decondary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h4>Reset Password</h4>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="password"> <b>New Password</b> </label>
                    <input type="password" placeholder='Enter new password' 
                            name="password" className='form-control rounded-0' 
                            autoComplete='off'
                            onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit" className='btn btn-success w-100 rounded-0'>Update</button>
                </form>
        </div>
    </div>
  )
}

export default ResetPassword;