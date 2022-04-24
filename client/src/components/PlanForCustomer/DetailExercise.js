import React from "react";
import classes from "../../styles/DetailExercise.module.css"
const DetailExercise = () => {
  return <div className={classes.container}>
  <div className={classes.uppertext}>
    <p className="text-center">Detail</p>
  </div>
  <div className={classes.detail}>
    <img src="https://classroomclipart.com/images/gallery/Clipart/Fitness_and_Exercise/man-working-out-in-gym-with-blue-exercise-ball-clipart.jpg" />
  </div>
</div>
};

export default DetailExercise;
