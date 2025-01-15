import React, { useState } from 'react'
import { foodItems } from '../data/foodData';
import { BsBookmarkHeart } from 'react-icons/bs';
import Popup from './Popup';

const Dishes = () => {

  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpImage, setPopUpImage] = useState('')


  const handleMouseEnter = (imageUrl) => {
    setPopUpImage(imageUrl)
    setShowPopUp(true)
  }

  const handleClosePopup = () => {
    setShowPopUp(false);
  };

  const addToCart = (foodItem) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(foodItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };


  return (
    <div className='flex flex-wrap justify-evenly gap-4 px-4 py-6'>
      {foodItems.map((foodItem) => (
        <div key={foodItem.id} className='p-4  w-60 h-60 border-black border-2 rounded-lg bg-white flex flex-col justify-center items-center gap-1'>
          <div className='w-full  text-xl flex justify-end py-2'>
            <span className='text-right cursor-pointer'><BsBookmarkHeart /></span>
          </div>

          <img src={foodItem.image} alt="" style={{ width: '110px', height: '80px' }} onClick={() => handleMouseEnter(foodItem.image)} className='' />

          <h2 className='font-semibold '>{foodItem.name}</h2>
          <h2 className='font-semibold'>₹{foodItem.price}</h2>
          <button className='bg-myYellow text-black px-2 py-1 rounded-lg font-medium hover:font-bold hover:bg-yellow-500' onClick={() => addToCart(foodItem)}>Add To Cart</button>

        </div>
      ))
      }

      <Popup show={showPopUp} onClose={handleClosePopup} imageUrl={popUpImage} />
    </div>
  )
}

export default Dishes
