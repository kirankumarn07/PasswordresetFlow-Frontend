import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate()

    axios.defaults.withCredentials=true;
    const handleSubmit=(e)=>{
        e.preventDefault()  
        axios.post(`http://localhost:3011/login`,{email,password})
        .then(result=>{console.log(result)
            if(result.data ==="Success"){
                navigate('/home')
            }
       
        })
        .catch(error=>console.log(error))

    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-decondary vh-100'>
        <div className='bg-white p-3 rounded resWidth'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"> <b>Email</b> </label>
                    <input type="email" placeholder='Enter email' 
                            name="email" className='form-control rounded-0' 
                            autoComplete='off'
                            onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="email"> <b>Password</b> </label>
                    <input type="password" placeholder="Enter Password" 
                            name="password" className='form-control rounded-0'
                            onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit" className='btn btn-success w-100 rounded-0'>Login</button>
                </form>
                <Link to='/forgot-password'>Forgot Password</Link>
                <br/>
                <p>Don't have an account</p>
                <Link to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Sign up</Link>

        </div>
        


    </div>
  )
}

export default Login