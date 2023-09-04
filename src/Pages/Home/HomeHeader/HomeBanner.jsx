import React from 'react'
import CarouselSlider from './CaruselSlider'
import mujib from "../../../assets/images/mujib.png"
function HomeBanner() {
    return (
        <div className='flex overflow-hidden items-end justify-between py-2 px-1 h-72 flex-wrap'>
            <div className="homeSlider w-full md:w-72">
                <CarouselSlider />
            </div>
            <div className="homeImage w-full mt-7 md:w-25 shadow-lg">
              
                    <img className=' w-11/12 mx-auto md:w-full sliderImg' src={mujib} alt="mujibur rahman " />
            </div>
        </div>
    )
}

export default HomeBanner