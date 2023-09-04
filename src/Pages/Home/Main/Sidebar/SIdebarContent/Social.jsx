import React from 'react'

import { MdNavigateBefore } from "react-icons/md"
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs"
function Social() {
    return (
        <div className='my-8'>
            <h1 className='heading'>সামাজিক যোগাযোগ</h1>
            <div className='border-1 border-dotted border-slate-300'>
                <div className='flex gap-4 py-3 items-center justify-center'>
                    <BsFacebook className='text-2xl text-green-700  duration-300 cursor-pointer' />
                    <BsInstagram className='text-2xl text-green-700  duration-300 cursor-pointer' />
                    <BsYoutube className='text-2xl text-green-700  duration-300 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Social