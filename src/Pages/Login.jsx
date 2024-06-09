import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({login}) => {
const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const [msg,setmsg]=useState('');
const navig=useNavigate()
const handlePassword=async (e)=>{
    navig('/forgotpassword')   
    
}

const handleSubmit=async(e)=>{
    e.preventDefault();
    const payload={email,password}
    await axios.post('https://authentication-backend-tgky.onrender.com/api/userlogin',payload)
    .then(res=>{setmsg(res.data.message)

        setTimeout(() => {
            navig('/courses')
            login();
            
        }, 1000);
            setemail('');
            setpassword('');
    })
    .catch(err=>{
        setmsg(err.response.data.message);
    })


}

    return (
        <div>
            <h1 className='title'>Login</h1>
      <div className="card-center m-3">
      <div className="card  w-50 text-center">
        <form onSubmit={handleSubmit}>
              <div className="row">
             <div className="row-cols-2">
<br />
             <label className='col-3 p-3 text-end'>
                    Email:
                </label>
                <input className='border-black' type="email"  name="email" value={email} onChange={(e)=>setemail(e.target.value)} required/><br />
<br />
                <label className='col-3 p-3 text-end'>
                    Password:
                </label>
                <input type="password" className='border-black' name="password" value={password} onChange={(e)=>setpassword(e.target.value)} required/>
<br /><br /> </div>
</div>
                <button type='submit' className='btn' >
                    Login
                </button><br />
                <button onClick={handlePassword} className='btn' >
                    Forgot Password
                </button>
<h5 onSubmit={handleSubmit}>{msg}</h5>

            
            </form>
        </div>
      </div>
        </div>
    );
};

export default Login;