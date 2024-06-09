import axios from 'axios';
import React, { useState } from 'react';

const ForgotPassword = () => {
const [email,setemail]=useState('');
const [msg,setmsg]=useState('');


const handleSubmit=async(e)=>{
    e.preventDefault();
    const payload={email}
    await axios.post('https://authentication-backend-tgky.onrender.com/api/forgotpassword',payload)
    .then(res=>{setmsg(res.data.message)

            setpassword('');
    })
    .catch(err=>{
        setmsg(err.response.data.message);
    })


}

    return (
        <div>
            <h1 className='title'>Forgot Password</h1>
            <div className="card-center m-3">
                <div className="card w-50 text-center">

                <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="row-cols-sm-2">
                <label className='col-sm-3 p-3 text-end'>
                    Email:
                </label>
                <input className='border-black' required type="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)}/><br />
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

export default ForgotPassword;