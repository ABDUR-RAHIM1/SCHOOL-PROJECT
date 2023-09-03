import React from 'react'
import AboutInfo from './AboutInfo'
import NoticeBoard from './NoticeBoard'
import InstituteInfo from './InstituteInfo'
import SIdebar from './SIdebar'
import Gallary from './Gallary'
import AcademicInfo from './AcademicInfo'
import Comitee from './Comitee'

function Main() {
  return (
    <div className='my-5  flex justify-between flex-wrap '>
         <div className="main_content w-full md:w-72 ">
            <AboutInfo/>
            <NoticeBoard/>
            <InstituteInfo/>
            <Gallary/>
            <AcademicInfo/>
            <Comitee/>
         </div>
         <div className="sidebar mt-7 md:mt-0 w-full  md:w-25">
           <SIdebar/>
         </div>
    </div>
  )
}

export default Main