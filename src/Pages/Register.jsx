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
            <form onSubmit={handleSubmit}>
                <label>
                    UserName:
                </label>
                <input type="text" name="username" value={username} onChange={(e)=>setusername(e.target.value)}  /><br />
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
                    Register
                </button>
<h5 onClick={handleSubmit}>{msg}</h5>
            </form>
        </div>
    );
};

export default Register;