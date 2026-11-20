import React from 'react'
import './App.css'
import './index.css'
import Navbar from './Coponets/Navbar'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieDetail from './Pages/MovieDetail'

const App = () => {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App