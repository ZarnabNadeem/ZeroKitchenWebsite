import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './store.jsx'
import { Provider } from 'react-redux'
import './index.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
)
