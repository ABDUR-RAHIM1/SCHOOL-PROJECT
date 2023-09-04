import React from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='wrapper'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App