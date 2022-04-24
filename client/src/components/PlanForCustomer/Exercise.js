import React, { useState } from "react";
import classes from "../../styles/Exercise.module.css";
const Exercise = () => {
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
        <div className={classes.exercise}>
          <div className="flex">
              <img
                className="mr-5"
                src="https://classroomclipart.com/images/gallery/Clipart/Fitness_and_Exercise/man-working-out-in-gym-with-blue-exercise-ball-clipart.jpg"
                alt="exercise"
              />
              <div className={classes.bottomtext}>
                <p className="font-bold text-2xl">Running</p>
                <p>Time: 30 minutes.</p>
                <div>
                    <span className="pr-2">Sets: 10.</span>
                    <span>Reps: 10.</span>
                </div>
              </div>
          </div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckDefault"
            ></label>
          </div>
        </div>
        <div className={classes.exercise}>
          <div className="flex">
              <img
                className="mr-5"
                src="https://classroomclipart.com/images/gallery/Clipart/Fitness_and_Exercise/man-working-out-in-gym-with-blue-exercise-ball-clipart.jpg"
                alt="exercise"
              />
              <div className={classes.bottomtext}>
                <p className="font-bold text-2xl">Running</p>
                <p>Time: 30 minutes.</p>
                <div>
                    <span className="pr-2">Sets: 10.</span>
                    <span>Reps: 10.</span>
                </div>
              </div>
          </div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckDefault"
            ></label>
          </div>
        </div>
        <div className={classes.exercise}>
          <div className="flex">
              <img
                className="mr-5"
                src="https://classroomclipart.com/images/gallery/Clipart/Fitness_and_Exercise/man-working-out-in-gym-with-blue-exercise-ball-clipart.jpg"
                alt="exercise"
              />
              <div className={classes.bottomtext}>
                <p className="font-bold text-2xl">Running</p>
                <p>Time: 30 minutes.</p>
                <div>
                    <span className="pr-2">Sets: 10.</span>
                    <span>Reps: 10.</span>
                </div>
              </div>
          </div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckDefault"
            ></label>
          </div>
        </div>
        <div className={classes.exercise}>
          <div className="flex">
              <img
                className="mr-5"
                src="https://classroomclipart.com/images/gallery/Clipart/Fitness_and_Exercise/man-working-out-in-gym-with-blue-exercise-ball-clipart.jpg"
                alt="exercise"
              />
              <div className={classes.bottomtext}>
                <p className="font-bold text-2xl">Running</p>
                <p>Time: 30 minutes.</p>
                <div>
                    <span className="pr-2">Sets: 10.</span>
                    <span>Reps: 10.</span>
                </div>
              </div>
          </div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckDefault"
            ></label>
          </div>
        </div>
        <div className={classes.exercise}>
          <div className="flex">
              <img
                className="mr-5"
                src="https://classroomclipart.com/images/gallery/Clipart/Fitness_and_Exercise/man-working-out-in-gym-with-blue-exercise-ball-clipart.jpg"
                alt="exercise"
              />
              <div className={classes.bottomtext}>
                <p className="font-bold text-2xl">Running</p>
                <p>Time: 30 minutes.</p>
                <div>
                    <span className="pr-2">Sets: 10.</span>
                    <span>Reps: 10.</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
