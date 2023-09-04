import React from 'react'
import { Link } from 'react-router-dom'

function Info({info}) {
  return (
    <div className='relative mb-10 w-full p-2 text-center border-1 border-dotted border-slate-300'>
        <img className='w-full h-52' src={info?.img} alt="principle informattion" />
        <Link to="/details-principle" className='absolute w-full bg-green-200  bottom-0 left-2/4 -translate-x-2/4 text-center'>{info.name}</Link>
    </div>
  )
}

export default Info