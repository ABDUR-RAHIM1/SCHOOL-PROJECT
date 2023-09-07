import React from 'react'
import { useLocation } from 'react-router-dom'

function Banner() {
    const path = useLocation().pathname
    let dashboard;

    if (path === "/teacher-dashboard" || path === "/student-dashboard") {
        dashboard = path;
    } else {
        dashboard = "";  
    }
    return (
        <div className={` ${path === dashboard ? "hidden" : "flex"} Banner bg-slate-300  items-center justify-start`}>
            <div className='pl-5'>
                <h1 className='h1  font-semibold text-white'>Poular Dhakil Madrasah</h1>
                <h1 className='h1  font-semibold text-green-600'>পপুলার দাখিল মাদ্রাসা</h1>
            </div>
        </div>
    )
}

export default Banner