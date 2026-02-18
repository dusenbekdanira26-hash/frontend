import React, { useEffect, useState, useRef } from 'react'

export default function UserProfile({ userId, onRefresh }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const controllerRef = useRef(null)

  useEffect(() => {
    const controller = new AbortController()
    controllerRef.current = controller

    setLoading(true)
    setError(null)
    setUser(null)

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then(data => {
        setUser(data)
        setLoading(false)
      })
      .catch(err => {
        if (err.name === 'AbortError') return
        setError(err.message)
        setLoading(false)
      })

    return () => {
      controller.abort()
    }
  }, [userId])

  return (
    <div className="profile">
      <h3>User Profile — ID: {userId}</h3>
      {loading && <div>Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      {user && (
        <div>
          <div><strong>Name:</strong> {user.name}</div>
          <div><strong>Email:</strong> {user.email}</div>
        </div>
      )}
      <div style={{ marginTop: 12 }}>
        <button onClick={() => onRefresh && onRefresh()}>Refresh</button>
      </div>
    </div>
  )
}
