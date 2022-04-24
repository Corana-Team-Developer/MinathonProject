import React from 'react'
import classes from "../../styles/TraningPlan.module.css"
const TrainingPlan = () => {
  return (
    <div className={classes.container+ " text-center"}>
        <div className={classes.uppertext}>
          <p className="text-center">Training Plan</p>
        </div>
        <div>
          <p className={classes.day}>Day 1</p>
          <p className={classes.day}>Day 2</p>
          <p className={classes.day}>Day 3</p>
          <p className={classes.day}>Day 4</p>
          <p className={classes.day}>Day 5</p>
          <p className={classes.day}>Day 6</p>
        </div>
    </div>
  )
}

export default TrainingPlan