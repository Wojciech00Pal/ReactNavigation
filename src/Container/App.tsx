import React from 'react'
import Header from '../layout/header'
import Home from '../Pages/Home'
import Navbar from '../layout/navbar'
import { Route,Routes } from 'react-router-dom'
import People from '../Pages/People'


function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className='pb-5'>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/People" element={<People/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App