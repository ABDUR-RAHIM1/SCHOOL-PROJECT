import React from 'react'
import img from "../../../../../assets/images/national-Helpline.jpg"
import {motion} from "framer-motion"
function HelpLIne() {
  return (
    <>
    <h1 className='heading'>জরুরী  সেবা </h1>
    
    <motion.div 
     initial = {{opacity :0,  scale: 0.7}}
     whileInView = {{opacity :1,  scale: 1}}
     transition={{
       duration :"0.5"
     }}
    className='my-6 sidebarItem'>
         <div className='border-1 border-dotted border-slate-300'>
              <img className='helpLineImg my-4' src={img} alt="" />
         </div>
    </motion.div>
    </>
  )
}

export default HelpLIne