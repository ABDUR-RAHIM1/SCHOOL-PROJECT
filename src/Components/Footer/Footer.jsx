import React from 'react'
import { MdNavigateBefore } from "react-icons/md"
import {BsFacebook , BsInstagram, BsYoutube} from "react-icons/bs"
import { Link } from 'react-router-dom'
function Footer() {
  const item = [
    { item: "হোম", link: "/home" },
    { item: " আমাদের সম্পর্কে", link: "/about" },
    { item: "শিক্ষক", link: "/teachers" },
    { item: "নোটিশ বোর্ড", link: "/notice" },
    { item: "ফটো গ্যালারী", link: "/galllary" },
    { item: "যোগাযোগ করুন", link: "/contact" },
  ]

  return (
    <div className=' flex justify-between flex-wrap py-10 px-4 text-white bg-green-600'>
      <div className="footerContact w-full md:w-30">
        <h1 className='h1 mb-3'>পপুলার দাখিল</h1>
        <p className='mt-2 text-md font-semibold'>ঠিকানা : <span className='text-sm font-normal underline '>আদিতমারী , লালমনিরহাট </span></p>
        <p className='mt-2 text-md font-semibold'>মোবাইল : <span className='text-sm font-normal underline '> 01864432943 & 01321040273 </span></p>
        <p className='mt-2 text-md font-semibold'>ইমেল : <span className='text-sm font-normal underline '> dakhilmadrasha@gmail.com </span></p>
      </div>


      <div className="footerContact w-full md:w-30">
        <h1 className='h1 mb-3'>শর্টকাট</h1>
        <div>
          {
            item.map((item, index) => (
              <Link to={item.link} className='flex items-center mt-2 gap-2 hover:text-red-700 duration-500' key={index}>
                <MdNavigateBefore />
                {item.item}
              </Link>
            ))
          }
        </div>
      </div>

      <div className="footerContact w-full md:w-30">
        <h1 className='h1 mb-3'>যোগাযোগ </h1>
        <div className='flex gap-4'>
          <BsFacebook className='text-2xl text-white  duration-300 cursor-pointer' />
          <BsInstagram className='text-2xl text-white  duration-300 cursor-pointer' />
          <BsYoutube className='text-2xl text-white  duration-300 cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Footer