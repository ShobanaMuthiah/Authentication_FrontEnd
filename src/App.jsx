import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ForgotPassword from './Pages/ForgotPassword';
import Reset from './Pages/Reset';
import Courses from './Pages/Courses';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

    const login = () => {
        setIsLoggedIn(true);
    };
const logout=()=>{
  setIsLoggedIn(false);
  
  
}
  return (
    <div>
      <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} logout={logout}/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login login={login}/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/resetpassword/:token' element={<Reset login={login}/>}/>
      <Route path='/courses' element={isLoggedIn ? <Courses /> : <Navigate to="/" />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;