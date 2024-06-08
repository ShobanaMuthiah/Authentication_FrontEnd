import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
const [email,setemail]=useState('');
const [msg,setmsg]=useState('');
const navig=useNavigate()


const handleSubmit=async(e)=>{
    e.preventDefault();
    const payload={email}
    await axios.post('https://authentication-backend-tgky.onrender.com/api/forgotpassword',payload)
    .then(res=>{setmsg(res.data.message)

        setTimeout(() => {
            navig('/resetpassword')  
            
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
<br /><br />
                <button type='submit' >
                    Verify
                </button>
<h5 onSubmit={handleSubmit}>{msg}</h5>
            </form>
        </div>
    );
};

export default ForgotPassword;