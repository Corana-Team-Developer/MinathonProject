import React from "react";
import {BsDot} from "react-icons/bs"
import GaugeChart from 'react-gauge-chart'

const Meal = ({data}) => {
  if (data)
    return (
      <div class="flex flex-col shadow hover:shadow-md w-full bg-white rounded-lg cursor-pointer m-4 p-5">
        <div className="font-bold" style={{color: '#ec7807'}}>{data.name}</div>
        <div>100g per serving</div>
        <div className="flex items-center">
          <span>Calories: {data.calories}</span>
          <BsDot />
          <span>Carbs:{data.carbohydrate}g</span>
          <BsDot />
          <span>Fat: {data.fat}g</span>
          <BsDot />
          <span>Protein: {data.protein}g</span>
        </div>
      </div>
    );
};

export default Meal;
