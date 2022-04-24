import React, { useState } from 'react'
import Navbar from '../Navbar'
import TitleOfProblem from './TitleOfProblem'
import TrainingPlan from './TrainingPlan'
import Exercise from './Exercise'
import DetailExercise from './DetailExercise'
import { useSelector } from 'react-redux'

const PlanForCustomer = () => {
  const plan = useSelector(state => state.plan.items)
  const [selectIndex, setSelectIndex] = useState(0)
  const [exercise, setExercise] = useState(null)

  return (
    <div>
        <Navbar />
        <div className="px-24">
            <TitleOfProblem />
            <div className="grid grid-cols-3 gap-4">
              <TrainingPlan data={plan} select={setSelectIndex} index={selectIndex}/>
              <Exercise data={plan[selectIndex]?.exercises} select={setExercise}/>
              <DetailExercise data={exercise}/>
            </div>
        </div>
    </div>
  )
}

export default PlanForCustomer