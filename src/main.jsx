import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GetContextStore from './context/ContextStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GetContextStore>
    <App />
    </GetContextStore>
  </StrictMode>,
)
