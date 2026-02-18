import React, { useEffect, useState, useRef } from 'react'

// UserProfile fetches user data for a given userId prop.
// It manages loading/error/user state and uses AbortController for cleanup.
export default function UserProfile({ userId, onRefresh }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  // store controller ref so we can abort from handlers if needed
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

    // cleanup: abort previous request when userId changes or component unmounts
    return () => {
      controller.abort()
    }
  }, [userId])

  // Expose a refresh which asks parent to change userId to a random one.
  // This will trigger the effect again; previous fetch will be aborted
  // by the cleanup above.
  return (
    <div className="profile">
      <h3>User Profile — ID: {userId}</h3>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      {user && (
        <div>
          <div><strong>Name:</strong> {user.name}</div>
          <div><strong>Email:</strong> {user.email}</div>
        </div>
      )}

      <div className="buttons">
        <button onClick={() => onRefresh && onRefresh()}>Refresh</button>
      </div>
    </div>
  )
}
