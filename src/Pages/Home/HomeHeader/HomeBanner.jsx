import React from 'react'
import CarouselSlider from './CaruselSlider'
import mujib from "../../../assets/images/mujib.png"
import {motion} from "framer-motion"
function HomeBanner() {
    return (
        <div
      
        className='flex overflow-hidden items-end justify-between py-2 px-1 h-72 flex-wrap'>
            <motion.div 
                 initial={{opacity : 0, scale : 0.8}}
                 whileInView={{opacity : 1, scale : 1}}
                 transition={{
                   duration :"0.5"
                 }}
            className="homeSlider w-full md:w-72">
                <CarouselSlider />
            </motion.div>
            <motion.div
                initial={{scale : 0.5}}
                whileInView={{scale : 1}} 
                transition={{
                  duration :"0.5"
                }}
            className="homeImage w-full mt-7 md:w-25 shadow-lg">
              
                    <img className=' w-11/12 mx-auto md:w-full sliderImg' src={mujib} alt="mujibur rahman " />
            </motion.div>
        </div>
    )
}

export default HomeBanner