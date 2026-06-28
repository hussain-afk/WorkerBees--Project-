import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// pages
import AuthPage from '../pages/authPage'

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
