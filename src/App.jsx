import React from 'react'
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

const App = () => {
  return (
    <>

  <Layout />
  <Routes>
    <Route exact path='/home' element={<Home/>} />
    <Route  path='/about' element={<About/>} />


  </Routes>
      
    </>
  )
}

export default App
