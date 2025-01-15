import React, { useState } from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { BsBookmarkHeart } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { TbFileInvoice } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { GiChickenOven, GiFullPizza } from "react-icons/gi";
import { RiCake3Fill, RiDrinks2Line } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import Dishes from './Dishesh';
import { Link } from 'react-router-dom';
import { displayRazorpay } from '../payment'




const UserScreen = () => {

  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = [
    { icon: <RiCake3Fill />, label: 'Bakery' },
    { icon: <RiDrinks2Line />, label: 'Beverage' },
    { icon: <GiChickenOven />, label: 'Non Veg' },
    { icon: <GiFullPizza />, label: 'Pizza' },
    { icon: <IoFastFoodOutline />, label: 'Other' }
  ];

  // const handlePayment = () => { const amount = 106000; 
  // const name = 'Patricia'; const email = 'patricia@email.com';
  //  const contact = '9812398123'; displayRazorpay(amount, name, email, contact); };

  return (
    <main className='w-full flex flex-col sm:flex-row overflow-y-auto'>

      <div className="leftMenu w-full sm:w-1/5  py-6 flex flex-col justify-start items-center bg-zinc-900" >
        <img src="logo1.png" alt="Dasy Delicious" style={{ width: '120px', height: '120px' }} className='p-4' />

        <div className='flex flex-col gap-4  py-4'>
          <Link to='/' className='flex items-center gap-2 px-8 py-2 rounded-xl text-white font font-medium hover:bg-myYellow hover:font-bold hover:text-black'><IoHomeOutline />Home</Link>
          <button className='flex items-center gap-2 px-8 py-2 rounded-xl text-white font font-medium hover:bg-myYellow hover:font-bold hover:text-black'><LuLayoutDashboard />Dashboard</button>
          <button className='flex items-center gap-2 px-8 py-2 rounded-xl text-white font font-medium hover:bg-myYellow hover:font-bold hover:text-black'><MdOutlineDeliveryDining />Order</button>
          <button className='flex items-center gap-2 px-8 py-2 rounded-xl text-white font font-medium hover:bg-myYellow hover:font-bold hover:text-black'><BsBookmarkHeart />Favourite</button>
          <button className='flex items-center gap-2 px-8 py-2 rounded-xl text-white font font-medium hover:bg-myYellow hover:font-bold hover:text-black'><FaHistory />Order History</button>
          <button className='flex items-center gap-2 px-8 py-2 rounded-xl text-white font font-medium hover:bg-myYellow hover:font-bold hover:text-black'><TbFileInvoice />Bills</button>
          <button className='flex items-center gap-2 px-8 py-2 rounded-xl text-white font font-medium hover:bg-red-600 hover:font-bold hover:text-black'><FiLogOut />Log Out</button>

        </div>

      </div>


      <div className="centerPart flex flex-col w-full sm:w-4/5 h-auto bg-bgcl">

        <div className='h-24 flex justify-end px-6 py-8 mt-8'>

          <div className="h-12  w-1/3 py-2 flex gap-2 bg-white rounded-xl px-2">
            <button><FaSearch className='' /></button>
            <input type="text" placeholder="Search Your Food..." className="w-3/4 outline-none" />
          </div>
        </div>

        <div className="category px-6">
          <h2 className='text-xl font-semibold text-start'>Category</h2>

          <div className='flex justify-evenly gap-4 px-4 py-6'>
            {categories.map(category => (
              <div key={category.label} className='flex flex-col gap-2 items-center border-2 border-black bg-white rounded-lg p-4 sm:text-xl text-xs font-medium'>
                <button className='text-4xl' > {category.icon} </button>
                <h2>{category.label}</h2>
              </div>
            ))}
          </div>
        </div>


        <div>
          <h2 className='text-xl font-semibold text-start px-6'>Popular Dishes </h2>
          <div className='flex '>
            <Dishes selectedCategory={selectedCategory} />

          </div>
        </div>


      </div>

      <div className=" flex flex-col gap-4 px-4 rightMenu w-full sm:w-1/5 bg-zinc-900">

        <div className='flex justify-evenly text-white mt-8'>
          <h2 className=' text-xl font-semibold text-start '>Hello, Patricia</h2>
          <button className='bg-myYellow text-black p-2 rounded-2xl'><FaRegUser /></button>
        </div>

        <div className='text-white'>
          <h2 className='text-xl font-semibold text-start '>Your Address</h2>
          <h2 className='text-xs mt-2'>36, China town, Mall Road, Goa</h2>
          <button className='mt-4 px-2 py-1 rounded-xl text-xs text-white border-2  hover:bg-myYellow hover:font-bold hover:text-black hover:border-black'>Change Address</button>
        </div>

        <div className='flex flex-col gap-4 text-white bg-zinc-800  py-4 px-2 rounded-lg'>
          <h2 className='text-center font-semibold underline'>Your Cart</h2>
          <div className='flex items-center justify-evenly gap-2'>

            <img src="c3.png" alt="" width={'50px'} />
            <h2 className='text-xs'>Mix Fruit</h2>
            <span className='text-xs'>x1</span>
            <span className='text-xs'>₹499</span>
          </div>
          <div className='flex items-center justify-evenly gap-2'>

            <img src="d2.png" alt="" width={'50px'} />
            <h2 className='text-xs'>Pepsi</h2>
            <span className='text-xs'>x1</span>
            <span className='text-xs'>₹60</span>
          </div>

          <div className='flex items-center justify-evenly gap-2'>

            <img src="p4.png" alt="" width={'50px'} />
            <h2 className='text-xs'>Chilli Pizza</h2>
            <span className='text-xs'>x1</span>
            <span className='text-xs'>₹180</span>
          </div>

          <div className='flex items-center justify-evenly gap-2'>

            <img src="b2.png" alt="" width={'50px'} />
            <h2 className='text-xs'>Veg Burger</h2>
            <span className='text-xs'>x2</span>
            <span className='text-xs'>₹80</span>
          </div>

          <hr />
          <div className='flex justify-between'>
            <span className='text-xs'>Item Total</span>
            <span className='text-xs'>₹ 899</span>
          </div>

          <div className='flex justify-between'>
            <span className='text-xs'>Taxes</span>
            <span className='text-xs'>₹ 161</span>
          </div>

          <div className='flex justify-between'>
            <span className='text-xl'>Total</span>
            <span className='text-xl'>₹ 1060</span>
          </div>

          <button className='mt-4 px-2 rounded-xl text-xl text-white border-2  hover:bg-green-500 hover:font-semibold hover:text-black hover:border-black' >Pay Now</button>

        </div>

      </div>

    </main>)
}

export default UserScreen
