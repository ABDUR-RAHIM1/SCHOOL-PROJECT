import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { State } from './States/GlobalState.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <State>
      <App />
    </State>
  </React.StrictMode>,
)
