import React from "react";
import classes from "../../styles/DetailExercise.module.css"
const DetailExercise = ({data}) => {
  return <div className={classes.container}>
  <div className={classes.uppertext}>
    <p className="text-center">Detail</p>
  </div>
  {data && (
    <div className={classes.detail + " p-2"}>
      <img src={`http://localhost:5000/` + data.image.replaceAll(' ', '_')} className="w-32 h-56"/>
      <p className="mt-1">{data.instructions[0]}</p>
    </div>
  )}
</div>
};

export default DetailExercise;
