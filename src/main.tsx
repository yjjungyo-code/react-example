import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import BasicApp from './BasicApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <BasicApp /> */}
  </StrictMode>,
)
