import React from 'react'
import video from "./../../../../../assets/video.mp4"
import {motion} from "framer-motion"
function Video() {
  return (
    <motion.div
    initial={{scale : 0.5}}
    whileInView={{scale : 1}} 
    transition={{
      duration :"0.5"
    }}
    className='border-1 border-dotted mt-3 border-slate-300'>
       <h1 className='heading mb-2'>ভিডিও</h1>
        <video className='w-full rounded-md ' src={video} controls></video>
    </motion.div>
  )
}

export default Video