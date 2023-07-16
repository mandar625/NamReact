import React, { useState } from 'react'

const User = (props) => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(2)
    
  return (
    <div  className='userCard' >

        <p>{count}</p>
        <p>{count2}</p>
        <h2>Name :{props.name}</h2>
        <p>location Aurangabad</p>
        <p>Contact:Mandar_96_k</p>

    </div>
  )
}

export default User