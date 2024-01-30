import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
    
    if(!user) return <div>Plase login</div>

    return <div>Welcom {user.username}</div>
}

export default Profile
