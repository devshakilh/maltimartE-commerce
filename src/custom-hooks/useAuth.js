import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase.config'

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
      }
      else {
        setCurrentUser(null)
      }
    })
  })

  return {
    currentUser
  }
}
