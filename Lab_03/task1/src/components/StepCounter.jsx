import React, { useState } from 'react'

// StepCounter: demonstrates props + multiple state values
// Props: initialValue (default 0), step (default 1)
export default function StepCounter({ initialValue = 0, step = 1 }) {
  // current count
  const [count, setCount] = useState(initialValue)
  // history of all count values (push on every update)
  const [history, setHistory] = useState([initialValue])
  // how many operations (increment/decrement) performed
  const [operationCount, setOperationCount] = useState(0)

  function applyChange(delta) {
    const next = count + delta
    setCount(next)
    // append new value to history
    setHistory(prev => [...prev, next])
    setOperationCount(prev => prev + 1)
  }

  function resetAll() {
    setCount(initialValue)
    setHistory([initialValue])
    setOperationCount(0)
  }

  const lastFive = history.slice(-5)

  return (
    <div className="counter">
      <h3>Counter (step: {step})</h3>
      <div>Current count: <strong>{count}</strong></div>
      <div>Total operations: {operationCount}</div>
      <div>Last 5 values: {lastFive.join(', ')}</div>

      <div className="buttons">
        <button onClick={() => applyChange(step)}>Increment</button>
        <button onClick={() => applyChange(-step)}>Decrement</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  )
}
