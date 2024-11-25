import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { Auth0Provider } from '@auth0/auth0-react';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider domain="dev-wuule7hu423tjitj.us.auth0.com" clientId="V60bTbTZee6Zw4h7N8MHykv3NmGi3Cn7" authorizationParams={{ redirect_uri: window.location.origin }}>
         <App />
        <ToastContainer />
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>,
)
