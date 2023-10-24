import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './SignuP'
import Login from './Login'
import Home from './Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
      <Route path='/reset-password/:id/:token' element={<ResetPassword/>}></Route>
    </Routes>
</BrowserRouter>
  )
}

export default App
