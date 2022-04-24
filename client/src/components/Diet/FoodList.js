import React from "react";
import Meal from "./Meal";
const FoodList = ({data}) => {
  return (
    <div className="">
      {data?.map(e => (
        <Meal data={e}/>
      ))}
    </div>
  );
};

export default FoodList;
