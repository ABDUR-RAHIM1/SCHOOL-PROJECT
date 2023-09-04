import React from 'react'
import video from "./../../../../../assets/video.mp4"
function Video() {
  return (
    <div className='border-1 border-dotted mt-3 border-slate-300'>
       <h1 className='heading mb-2'>ভিডিও</h1>
        <video className='w-full rounded-md ' src={video} controls></video>
    </div>
  )
}

export default Video