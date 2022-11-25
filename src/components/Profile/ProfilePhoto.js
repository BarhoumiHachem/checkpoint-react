import React from 'react'
import photome from './photome.jpg'

const ProfilePhoto = () => {
  return (
    <div>
        <img src={photome} className='App-photo' alt='my photo'/>
    </div>
  )
}

export default ProfilePhoto