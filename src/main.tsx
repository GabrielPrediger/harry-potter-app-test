import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './style/index.css'
import './style/magic-border.css'

import App from './App.tsx'
import { Providers } from './Providers.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
)
