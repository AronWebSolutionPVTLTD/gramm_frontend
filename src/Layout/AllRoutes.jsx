import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../screens/login'
import NotFound from '../screens/NotFound'
import Home from '../screens/Home'
import Forgotpage from '../screens/Forgotpage'
import Resetpassword from '../screens/Resetpassword'
import Setnewpassword from '../screens/Setnewpassword'
import Successfullypage from '../screens/Successfullypage'
import Signup from '../screens/Signup'
import Verify_email from '../screens/Verify_email'
import OtpPage from '../screens/OtpPage'
import Profilepage from '../screens/Profilepage'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgot" element={<Forgotpage/>} />
        <Route path="/reset" element={<Resetpassword/>} />
        <Route path="/setpassword" element={<Setnewpassword/>} />
        <Route path="/successfully" element={<Successfullypage/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/verify-email" element={<Verify_email/>} />
        <Route path="/Otp" element={<OtpPage/>} />
        <Route path="/profilepage" element= {<Profilepage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
