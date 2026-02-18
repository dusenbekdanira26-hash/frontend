import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// combined styles
import './styles.css'
// reuse Task1 and Task2 styles so combined app shows the same UI
import '../../task1/src/styles.css'
import '../../task2/src/styles.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
