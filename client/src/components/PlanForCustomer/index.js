import React from 'react'
import Navbar from '../Navbar'
import TitleOfProblem from './TitleOfProblem'
import TrainingPlan from './TrainingPlan'
import Exercise from './Exercise'
import DetailExercise from './DetailExercise'
const PlanForCustomer = () => {
  return (
    <div>
        <Navbar />
        <div className="px-24">
            <TitleOfProblem />
            <div className="grid grid-cols-3 gap-4">
              <TrainingPlan />
              <Exercise />
              <DetailExercise />
            </div>
        </div>
    </div>
  )
}

export default PlanForCustomer