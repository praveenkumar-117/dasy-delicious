// Popup.js
import React from 'react';

const Popup = ({ show, onClose, imageUrl }) => {
  if (!show) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center'>
      <div className='bg-white p-4 rounded-lg shadow-lg relative'>
        <button className='absolute top-2 right-2 bg-gray-300 p-2 rounded-full' onClick={onClose}>✕</button>
        <img src={imageUrl} alt="Product" className='w-84 h-72 border-2 border-black bg-white'/>
      </div>
    </div>
  ); 
};

export default Popup;
