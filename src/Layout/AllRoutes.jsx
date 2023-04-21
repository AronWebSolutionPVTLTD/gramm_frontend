import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../screens/login'
import NotFound from '../screens/NotFound'
import Home from '../screens/Home'
import Forgotpage from '../screens/Forgotpage'
import Resetpassword from '../screens/Resetpassword'
import Setnewpassword from '../screens/Setnewpassword'
import Successfullypage from '../screens/Successfullypage'

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
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
