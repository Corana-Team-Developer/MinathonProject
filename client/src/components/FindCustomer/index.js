import React from 'react'
import FilterBar from '../FilterBar'
import ListCustomer from './ListCustomer'

const FindCustomer = () => {
  return (
    <div className="px-24">
        <FilterBar />
        <ListCustomer />
    </div>
  )
}

export default FindCustomer