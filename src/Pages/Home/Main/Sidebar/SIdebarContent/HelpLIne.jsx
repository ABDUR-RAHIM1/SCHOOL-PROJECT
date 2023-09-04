import React from 'react'
import img from "../../../../../assets/images/national-Helpline.jpg"
function HelpLIne() {
  return (
    <div className='my-6'>
         <h1 className='heading'>জরুরী  সেবা </h1>
         <div className='border-1 border-dotted border-slate-300'>
              <img className='helpLineImg my-4' src={img} alt="" />
         </div>
    </div>
  )
}

export default HelpLIne