import React, {useState} from 'react'
import { createContext } from 'react'

const ContextStore = createContext()

function GetContextStore({children}) {
// states
const [authMode, setAuthMode] = useState('login')



  return (
    <ContextStore.Provider value={{}}>
      {children}
    </ContextStore.Provider>
  )
}

export default GetContextStore
