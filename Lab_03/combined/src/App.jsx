import React, { useState } from 'react'
// Import CounterApp from the task1 folder
import CounterApp from '../../task1/src/components/CounterApp'
import UserProfile from './components/UserProfile'

// Combined App: simple tabs switch between CounterApp and UserProfile demo
export default function App() {
  const [tab, setTab] = useState('counter')
  const [userId, setUserId] = useState(1)

  return (
    <div className="container">
      <header className="appHeader">
        <h1>Lab 03 — Combined</h1>
        <div style={{ marginTop: 8 }}>
          <button onClick={() => setTab('counter')} className={tab === 'counter' ? 'active' : ''}>Counters</button>
          <button onClick={() => setTab('user')} style={{ marginLeft: 8 }} className={tab === 'user' ? 'active' : ''}>User Profile</button>
        </div>
      </header>

      <main>
        {tab === 'counter' && (
          <div>
            <CounterApp />
          </div>
        )}

        {tab === 'user' && (
          <div>
            <div style={{ marginBottom: 12 }}>
              <button onClick={() => setUserId(1)}>User 1</button>
              <button onClick={() => setUserId(2)} style={{ marginLeft: 8 }}>User 2</button>
              <button onClick={() => setUserId(3)} style={{ marginLeft: 8 }}>User 3</button>
            </div>
            <UserProfile userId={userId} onRefresh={() => setUserId(Math.floor(Math.random() * 10) + 1)} />
          </div>
        )}
      </main>
    </div>
  )
}
