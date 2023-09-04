import React from 'react'
import { Link } from 'react-router-dom'

function InstInfo({ info }) {
  return (
    <Link to={info.link} className='w-48 md:w-30 mt-4 border border-dotted border-slate-500 flex flex-col items-center justify-center  bg hover:rotate-1 duration-300 p-2 cursor-pointer'>

      <img className='w-32' src={info.img} alt="" />
      <h1 className='text-green-700 font-semibold mt-2'>{info.title}</h1>
    </Link>
  )
}

export default InstInfo