import React, { useState } from 'react'

export default function StepCounter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue)
  const [history, setHistory] = useState([initialValue])
  const [operationCount, setOperationCount] = useState(0)

  function applyChange(delta) {
    const next = count + delta
    setCount(next)
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
      <div className="muted">Total operations: {operationCount}</div>
      <div className="lastValues">Last 5 values: {lastFive.join(', ')}</div>

      <div className="buttons">
        <button onClick={() => applyChange(step)}>Increment</button>
        <button className="secondary" onClick={() => applyChange(-step)}>Decrement</button>
        <button className="resetBtn" onClick={resetAll}>Reset</button>
      </div>
    </div>
  )
}
