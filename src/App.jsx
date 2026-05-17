import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/register'
import Sidebar from './admin/Sidebar'
const App = () => {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/' element={<Sidebar/>} />
      </Routes>
   </BrowserRouter>
   </>
  )
}

export default App