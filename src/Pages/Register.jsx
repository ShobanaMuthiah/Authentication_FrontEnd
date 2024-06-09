import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
const [username,setusername]=useState('');
const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const [msg,setmsg]=useState('');
const navig=useNavigate()

const handleSubmit=async(e)=>{
    e.preventDefault();
    const payload={username,email,password}
    await axios.post('https://authentication-backend-tgky.onrender.com/api/userregister',payload)
    .then(res=>setmsg(res.data.message))
    .catch(error=>{
        setmsg(error.response.data.message)
    })
    setusername('');
    setemail('');
    setpassword('');
    navig('/login')

}

    return (
        <div>
           <div className="title">Register</div>
            <div className="card-center m-3">
                <div className="card card-center w-50 text-center">
                <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="row-cols-2">
                    <label className='col-3 p-3 text-end'>
                    UserName:
                </label>
                <input className='border-black' type="text" name="username" value={username} onChange={(e)=>setusername(e.target.value)} required  /><br />
                <label className='col-3 p-3 text-end'>
                    Email:
                </label>
                <input className='border-black' type="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)} required/><br />

                <label className='col-3 p-3 text-end'>
                    Password:
                </label>
                <input className='border-black' required type="password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
<br /><br />
                    </div>
                </div>
                <button className='btn' type='submit' >
                    Register
                </button>
<h5 onClick={handleSubmit}>{msg}</h5>
            </form>

                </div>
            
           </div>
        </div>
    );
};

export default Register;