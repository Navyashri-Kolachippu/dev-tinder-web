import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'

const Profile = () => {

  const user = useSelector((store) =>store.user);
  //console.log(user);
  return (
    <div><EditProfile userDetails={user}/></div>
  )
}

export default Profile;