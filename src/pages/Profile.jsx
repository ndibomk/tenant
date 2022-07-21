import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
    const { user } = useSelector((state) => ({ ...state.auth }));

  return (
    <div className='profile'>
        <div className="prof-details">
            <p>{user?.result?.name}</p>
            <p>{user?.result?.email}</p>
        </div>
        
        Profile</div>
  )
}

export default Profile