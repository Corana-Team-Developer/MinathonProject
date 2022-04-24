import React, { useState } from "react";
import classes from "../../styles/Exercise.module.css";
const Exercise = ({data, select}) => {
  const [isChecked, setIsChecked] = useState(false);
  const onClickHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={classes.container}>
      <div className={classes.uppertext}>
        <p className="text-center">Exercise</p>
      </div>
      <div className={classes.containerExercise + " no-scrollbar"}>
        {data?.map(e => (
          <div className={classes.exercise}>
            <div className="flex cursor-pointer" onClick={() => select(e.exercise)}>
                <img
                  className="mr-5"
                  src={`http://localhost:5000/` + e.exercise.image.replaceAll(' ', '_')}
                  alt="exercise"
                />
                <div className={classes.bottomtext}>
                  <p className="font-bold text-2xl">{e.exercise.name}</p>
                  <p>Time: 30 minutes.</p>
                  <div>
                      <span className="pr-2">Sets: {e.set}.</span>
                      <span>Reps: {e.rep}.</span>
                  </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercise;
