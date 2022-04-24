import React from "react";
import {BsDot} from "react-icons/bs"
import GaugeChart from 'react-gauge-chart'
const Meal = () => {
  return (
    <div class="flex flex-col shadow hover:shadow-md w-full bg-white rounded-lg cursor-pointer m-4 p-5">
      <div className="font-bold" style={{color: '#ec7807'}}>Caramelized Apples</div>
      <div>C3,0.167 th of recipe</div>
      <div className="flex items-center">
        <span>Calories: 100</span>
        <BsDot />
        <span>Carbs:16g</span>
        <BsDot />
        <span>Fat: 5g</span>
        <BsDot />
        <span>Protein: 0g</span>
      </div>
    </div>
  );
};

export default Meal;
