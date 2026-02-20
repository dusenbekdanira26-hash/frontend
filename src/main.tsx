import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Екеуін қатар импорттаймыз
import App from '../task1/App'
import SearchApp from '../task2/SearchApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <h1>Lab 5.1 - UserCard & SkillList</h1>
      <App />

      <hr />

      <h1>Lab 5.2 - SearchApp</h1>
      <SearchApp />
    </div>
  </StrictMode>,
)