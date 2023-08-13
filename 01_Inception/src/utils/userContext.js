import React, { createContext } from 'react'

const userContext = createContext({
    loggedInuser:"defaultuser"
})
export default userContext