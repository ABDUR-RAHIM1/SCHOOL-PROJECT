import React from 'react'
import AboutInfo from './MainContent/AboutInfo'
import NoticeBoard from './MainContent/NoticeBoard'
import InstituteInfo from './MainContent/InstituteInfo'
import SIdebar from './Sidebar/SIdebar'
import Gallary from './MainContent/Gallary'
import AcademicInfo from './MainContent/AcademicInfo'
import Comitee from './MainContent/Comitee' 
function Main() { 
  return (
    <div 
      className='my-5  flex justify-between flex-wrap '>
      <div className="main_content w-full md:w-72 ">
        <AboutInfo />
        <NoticeBoard />
        <InstituteInfo />
        <Gallary />
        <AcademicInfo />
        <Comitee />
      </div>
      <div className="sidebar mr-1 mt-7 md:mt-0 w-full  md:w-25">
        <SIdebar />
      </div>
    </div>
  )
}

export default Main