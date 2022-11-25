import React from 'react'
import './App2.css';
import ProfilePhoto from './components/Profile/ProfilePhoto'
import FullName from './components/Profile/FullName'
import Address from './components/Profile/Address'


const App2 = () => {
  return (
    <div className='App2'>
      <h1 className='Header'>Welcom To My Second React</h1>
      <div className='Main'>
        <ProfilePhoto/>
        <div className='Info'>
          <FullName/>
          <Address/>
        </div>
      </div>
    </div>
  )
}

export default App2