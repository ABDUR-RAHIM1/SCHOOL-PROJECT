import React from 'react'
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs"
import { motion } from "framer-motion"
function Social() {
    return (
        <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{
                duration: "0.5"
            }}
            className='my-8'>
            <h1 className='heading'>সামাজিক যোগাযোগ</h1>
            <div className='border-1 border-dotted border-slate-300'>
                <div className='flex gap-4 py-3 items-center justify-center'>
                    <BsFacebook className='text-2xl text-green-700  duration-300 cursor-pointer' />
                    <BsInstagram className='text-2xl text-green-700  duration-300 cursor-pointer' />
                    <BsYoutube className='text-2xl text-green-700  duration-300 cursor-pointer' />
                </div>
            </div>
        </motion.div>
    )
}

export default Social