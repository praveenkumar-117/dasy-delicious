import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openSignup = () => {
    setIsSignupOpen(true);
  };
  const closeSignup = () => {
    setIsSignupOpen(false);
  };

  
    const isOpenLogin = () => {
      setIsLoginOpen(true);
     
    };
    const closeLogin = () => {
      setIsLoginOpen(false);
    };
  return (
    <>

      <nav className='w-full flex gap-2 h-16 p-4'>
        <div className='sm:w-1/3 h-full flex justify-center items-center'>
          <img src="logo1.png" alt="Dasy Delicious" style={{ width: '55px', height: '55px' }} />

        </div>

        <ul className='sm:w-2/3  h-full flex space-x-4 mt-2 justify-evenly items-center text-myYellow font-medium '>
          {/* <li><a href='#home' className='text-3xl font-semibold text-amber-300'>Dasy Delicious</a></li> */}
          <li><Link to='/' className='hover:text-white  hover:font-semibold '>Home</Link></li>
          <li><Link to='/userscreen' className='hover:text-white  hover:font-semibold'>Menu</Link></li>
          <li><button onClick={openSignup} className='hover:text-white  hover:font-semibold'>Sign Up</button></li>
          <li><button onClick={isOpenLogin} className='hover:text-white  hover:font-semibold'>Login</button></li>
          <li><Link to='/contact' className='hover:text-white  hover:font-semibold'>Contact</Link></li>
        </ul>
      </nav>
      {isSignupOpen && <SignUp onClose={closeSignup} />}
      {isLoginOpen && <Login onClose={closeLogin} />}
    </>
  )
}

export default Navbar
