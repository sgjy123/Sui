import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Doc from './doc/doc'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Doc />
  </StrictMode>,
)
