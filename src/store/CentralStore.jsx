import React, { createContext, useState, useEffect } from 'react';
import { foodItems } from '../data/foodData';


const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {

    setFoodList(foodItems)
  }, [])



  return (
    <FoodContext.Provider value={{ foodList }}>
      {children}
    </FoodContext.Provider>
  );
};
export default FoodContext;