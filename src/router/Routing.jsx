import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ContextStore } from '../context/ContextStore'

// pages
import AuthPage from '../pages/authPage'
import SetupFreelancerProfile from '../pages/freelancerSide/setupFreelancerProfile'
import SetupUserProfilePage from '../pages/userSide/SetupUserProfile'

function Routing() {
  const { user } = useContext(ContextStore);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<AuthPage />} />
        
        {/* Protected Routes */}
        <Route 
          path="/setup-freelancer-profile" 
          element={user ? <SetupFreelancerProfile /> : <Navigate to="/" replace />} 
        />
        <Route 
          path="/setup-user-profile" 
          element={user ? <SetupUserProfilePage /> : <Navigate to="/" replace />} 
        />

        {/* Catch-all Route (Optional: Redirects any unknown URL back to home) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing