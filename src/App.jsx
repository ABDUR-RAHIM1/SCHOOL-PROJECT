import React from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home/Home'
import LoginHome from './Pages/Login/LoginHome'
import TeacherDashboard from './Components/Dashboard/TeacherDashboard/TeacherDashboard'
import StudentDashboard from './Components/Dashboard/StudentDashboard/StudentDashboard'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='overflow-hidden'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginHome />} />
          <Route path='/teacher-dashboard' element={<TeacherDashboard />} />
          <Route path='/student-dashboard' element={<StudentDashboard />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App