import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Reset = () => {
const [password,setpassword]=useState('');
const [msg,setmsg]=useState('');
const navig=useNavigate()
const {id}=useParams();


const handleSubmit=async(e)=>{
    e.preventDefault();
    const payload={password}
    await axios.post(`https://authentication-backend-tgky.onrender.com/api/reset-password/${id}`,payload)
    .then(res=>{setmsg(res.data.message)

        setTimeout(() => {
            navig('/')
            
            
        }, 1000);
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
                    Password:
                </label>
                <input type="password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
<br /><br />
                <button type='submit' >
                    Reset
                </button>
<h5 onSubmit={handleSubmit}>{msg}</h5>
            </form>
        </div>
    );
};

export default Reset;