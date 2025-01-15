import React from 'react'
import { Link } from 'react-router-dom';
import { FaRegWindowClose } from "react-icons/fa";

const Login = ({ onClose }) => {
  return (
    <div>
      <div className='fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-20'>
        <div className=' sm:w-1/3 h-1/2  flex gap-2 item-center  rounded-lg shadow-lg relative' style={{ background: 'linear-gradient(to top right, #635b5b, black)' }}>
          <button className='absolute top-0 right-0 bg-gray-200 p-2 text-red-800 rounded-md' onClick={onClose}><FaRegWindowClose /></button>

          <div className='bg-myYellow w-1/4 h-full flex justify-center items-center rounded-l-lg'>


            <h2 className='text-black text-center font-semibold text-xl px-2'>Login Here</h2>
          </div>
          <div className='flex flex-col justify-center gap-2 py-8 px-4 w-2/3 '>
            <label htmlFor="UserName" className='text-xl text-myYellow'>UserName</label>
            <input type="text" className='rounded-md py-1 ' />
            <label htmlFor="Password" className='text-xl text-myYellow'>Password</label>
            <input type="text" className='rounded-md py-1' />
            <button className=' w-fit px-8 border-2 rounded-md py-1 mt-4 text-white hover:text-black hover:bg-myYellow hover:font-bold hover:border-black '>Login</button>

            <h2 className='text-white'>Don't Have Account ? <button className='text-myYellow Font-medium'> SignUp</button> </h2>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Login


