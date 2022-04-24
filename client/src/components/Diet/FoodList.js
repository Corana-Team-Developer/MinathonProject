import React from "react";
import FoodCard from "./FoodCard";
const FoodList = () => {
  return (
    <div className="grid grid-cols-3 gap-3 p-10">
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
    </div>
  );
};

export default FoodList;
