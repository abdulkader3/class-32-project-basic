import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import shanto from './store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={shanto}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
)
