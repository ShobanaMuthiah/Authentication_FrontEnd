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
            <form onSubmit={handleSubmit}>
              <label>
                    Email:
                </label>
                <input type="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)}/><br />

                <label>
                    Password:
                </label>
                <input type="password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
<br /><br />
                <button type='submit' >
                    Login
                </button>
                <button onClick={handlePassword} >
                    Forgot Password
                </button>
<h5 onSubmit={handleSubmit}>{msg}</h5>
            </form>
        </div>
    );
};

export default Login;