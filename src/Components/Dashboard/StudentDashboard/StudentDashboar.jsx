import React, { useContext, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar' 
import arrow from "../../../assets/images/arrow.png"
import { StudentItem } from '../../../utils/sidebarItems'
import { globalState } from '../../../States/GlobalState'
import Profile from '../../DasboardComponents/Profile/Profile'
function StudentDashboard() { 
  const {show ,setShow , itemText ,component , setComponent} = useContext(globalState)
  if (itemText === "TEACHER") setComponent("teacher")
  if (itemText === "PROFILE") setComponent("profile")
  return (
    <div className= ' bg-slate-700 text-white h-90vh flex flex-wrap '>
      <div className={`${show ?"w-64" : " w-20"} duration-300 sidebar relative px-3 border-r-2 border-solid border-slate-400`}>
         <img onClick={()=> setShow(!show)} className={`${!show && "rotate-180"} w-10 cursor-pointer absolute top-0 -right-4`} src={arrow} alt="" />
        <Sidebar
          item={StudentItem}
        />
      </div>
      <div className="content flex-1 p-3">
         {component}
      </div>
    </div>
  )
}

export default StudentDashboard