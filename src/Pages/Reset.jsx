import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Reset = ({login}) => {
const [password,setpassword]=useState('');
const [msg,setmsg]=useState('');
const navig=useNavigate()
const {token}=useParams();


const handleSubmit=async(e)=>{
    e.preventDefault();
    const payload={password}
    await axios.post(`https://authentication-backend-tgky.onrender.com/api/reset-password/${token}`,payload)
    .then(res=>{setmsg(res.data.message)

        setTimeout(() => {
            navig('/courses')
            login();
            
        }, 1000);
            setpassword('');
    })
    .catch(err=>{
        setmsg(err.response.data.message);
    })


}

    return (
        <div>
            <h1 className='title'>Reset Password</h1>
            <div className="card-center m-3">
                <div className="card card-format text-center">

                <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="row-cols-sm-2">
                <label className='col-12 col-sm-4 p-2 text-sm-end'>
                    New Password:
                </label>
                <input className='border-black' required type="password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)}/><br />
<br />
                </div>
            </div>
                <button className="btn" type='submit' >
                    Verify
                </button>
<h5 onSubmit={handleSubmit}>{msg}</h5>
            </form>

                </div>
            </div>
        </div>
    );
};

export default Reset;