import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './component/Home'
import UserScreen from './component/UserScreen'
import Login from './component/Login'
import Contact from './component/Contact'
import SignUp from './component/SignUp';



function App() {


  return (
    <>
      <Router>
      <Routes>
          <Route path='/' element={<Home />} />

          {/* <Route path='*' element={<Error404 />} /> */}
          <Route path='/signUp' element={<SignUp />} />

          <Route path='/login' element={<Login />} />
          <Route path='/userscreen' element={<UserScreen />} />
          

          <Route path='/contact' element={<Contact />} />

        </Routes>
        
      </Router>
    </>
  )
}

export default App
