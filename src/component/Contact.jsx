import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
 
  return (
    <>
     
      <div className='h-screen sm:px-40 py-6' style={{ background: 'linear-gradient(to top right, #635b5b, black)' }}>
      <Navbar />

        <h1 className=' font-bold text-2xl text-myYellow text-center underline mt-8'>
          Contact
          
        </h1>
        {/* <p className='text-white text-center py-4'>Share Your Feedback with Us let us know what you feel about our services.</p> */}
        <div className='border-2 border-gray-400 my-4 flex flex-col gap-4 text-white rounded-xl py-8 px-20 mx-20'>
          <h3 >Your full Name </h3>
          <input type="text" placeholder="First Name and Last Name " className='border-white rounded-lg bg-transparent border w-full p-4 py-1 flex' />
          <h3>Your Email Address</h3>
          <input type="text" placeholder="name@email.com " className='border-white rounded-lg bg-transparent border w-full p-4 py-1 flex' />
          <h3>Your message </h3>
          <textarea type="text" placeholder="Leave a comment... " className='border-white rounded-lg bg-transparent border w-full p-4 py-1 flex' />
          <button className='text-white w-fit px-4 py-2 rounded-lg border-2 border-white  hover:text-black hover:bg-myYellow hover:font-bold hover:border-black  ' >Send Message</button>
        </div>

      </div>
     
    </>
  )
}

export default Contact

