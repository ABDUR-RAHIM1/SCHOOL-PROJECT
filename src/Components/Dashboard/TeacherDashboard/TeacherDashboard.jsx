import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'

function TeacherDashboard() {
  return (
    <div className=' flex overflow-hidden w-full text-white flex-wrap bg-slate-700'>
        <Sidebar /> 
        <Content /> 
    </div>
  )
}

export default TeacherDashboard