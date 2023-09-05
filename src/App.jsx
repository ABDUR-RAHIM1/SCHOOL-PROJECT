import React from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home/Home' 
import LoginHome from './Pages/Login/LoginHome'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginHome />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App