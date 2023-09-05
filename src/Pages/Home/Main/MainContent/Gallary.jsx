import React from 'react'
import image from "../../../../assets/images/image.png"
import video from "../../../../assets/images/video.png"
import {motion} from "framer-motion"
function Gallary() {
  return (
    <>
      <h1 className='heading'> গ্যালারি </h1>
      <div className="shadowStyle flex justify-between flex-wrap">
        <motion.div
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: "0.5"
          }}
          className="flex py-2 rounded-sm items-center justify-center flex-col bg w-full md:w-48 mt-4">
          <img className='w-32' src={image} alt="" />
          <p className='mt-1 text-green-700'>ফটো গ্যালারী</p>
        </motion.div>
        <motion.div
           initial={{ y: 50 }}
           whileInView={{ y: 0 }}
           transition={{
             duration: "0.5"
           }}
        className="flex py-2 rounded-sm items-center justify-center flex-col bg w-full md:w-48 mt-4">
          <img className='w-32' src={video} alt="" />
          <p className='mt-1 text-green-700'>ভিডিও গ্যালারী</p>
        </motion.div>
      </div>
    </>
  )
}

export default Gallary