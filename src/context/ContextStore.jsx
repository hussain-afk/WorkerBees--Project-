import React, { useState } from 'react'
import { createContext } from 'react'

export const ContextStore = createContext()

function GetContextStore({ children }) {
  // states
  const [authMode, setAuthMode] = useState('login')
  // user data
  const [user, setUser] = useState(null)
  // freelancer profile data
  const [freelancerFormData, setFreelancerFormData] = useState({
    title: '',
    hourlyRate: '',
    portfolioUrl: '',
    bio: '',
  });
  // user profile data
  const [userformData, setUserFormData] = useState({
    fullName: '',
    phoneNumber: '',
    location: '',
    avatarUrl: '',
    headline: ''
  });



  return (
    <ContextStore.Provider value={{ authMode, setAuthMode, user, setUser, freelancerFormData, setFreelancerFormData, userformData, setUserFormData }}>
      {children}
    </ContextStore.Provider>
  )
}

export default GetContextStore
