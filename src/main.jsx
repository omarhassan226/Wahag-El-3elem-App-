import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CourseProvider } from './context/CourseContext.jsx'
import { CartProvider } from './context/CartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // </React.StrictMode>,
  // <StudentProvider>
  // </StudentProvider>
  <CourseProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </CourseProvider>

)
