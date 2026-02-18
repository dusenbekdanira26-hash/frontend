import React from 'react'
import StepCounter from './StepCounter'

// CounterApp shows two independent StepCounter instances.
// Each instance keeps its own state; props provide initial configuration.
// This demonstrates how props configure a component while state tracks
// its internal, interactive data over time.
export default function CounterApp() {
  return (
    <div className="container">
      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={10} step={5} />
    </div>
  )
}
