import React from 'react'
import classes from "../../styles/TraningPlan.module.css"
const TrainingPlan = ({data, select, index}) => {
  return (
    <div className={classes.container+ " text-center"}>
        <div className={classes.uppertext}>
          <p className="text-center">Training Plan</p>
        </div>
        <div>
          {data?.map((day,idx) => (
            <p className={classes.day + " cursor-pointer hover:bg-blue-200 duration-200" 
            + ((idx === index) ? " bg-blue-200" : "")
            } onClick={() => select(idx)}>Day {idx + 1} - {day.name}</p>
          ))}
        </div>
    </div>
  )
}

export default TrainingPlan