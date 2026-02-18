import React, { useState } from 'react'
import UserProfile from './components/UserProfile'

export default function App() {
  const [userId, setUserId] = useState(1)

  function setRandom() {
    const next = Math.floor(Math.random() * 10) + 1
    setUserId(next)
  }

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Lab 03 — Task 2: UserProfile</h1>

      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)} style={{ marginLeft: 8 }}>User 2</button>
        <button onClick={() => setUserId(3)} style={{ marginLeft: 8 }}>User 3</button>
        <button onClick={setRandom} style={{ marginLeft: 8 }}>Random</button>
      </div>

      <UserProfile userId={userId} onRefresh={setRandom} />
    </div>
  )
}
