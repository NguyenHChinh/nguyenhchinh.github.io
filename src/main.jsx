import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleReCaptchaProvider
      reCaptchaKey="6LedDTYrAAAAADxIo6dYm8koWfXNTjulgCsHTvrr"
      scriptProps={{ async: true, defer: true }}
    >
      <App />
    </GoogleReCaptchaProvider>
  </StrictMode>,
)
