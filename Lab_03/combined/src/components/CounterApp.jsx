import React from 'react'
import StepCounter from './StepCounter'

export default function CounterApp() {
  return (
    <div className="container">
      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={10} step={5} />
    </div>
  )
}
