import React from 'react'
import { Navigation } from './pages/Navigation'
import './App.css'
import { NewsMain } from './pages/NewsMain'
function App() {
  return (
    <div className='App'>
      
      <Navigation/>
      <div className='main'>
      <div className='Middle'>
      <NewsMain/>
      </div>
      </div>
    </div>
  )
}

export default App