import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userid} = useParams()
  return (
    <div className='text-3xl text-center text-red-500'>
      user : {userid}
    </div>
  )
}

export default User
