import React from 'react'

function News() {
  return (
    <div className='bg-green-700 py-2 relative'>
         <marquee>
             <p className='text-white text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci qui nisi, enim beatae cum autem reiciendis nam tempora doloremque officia? Voluptatum, cumque, cum sit repellendus aliquam magni voluptatibus ipsam dolore vero numquam animi id ex saepe veniam facere mollitia similique esse molestiae totam voluptates sed non! Libero vero odio pariatur.</p>
         </marquee>
         <div className='bg-red-600 h-full w-20 flex items-center justify-center absolute top-0 left-0'>
             <p className='text-1xl text-white'>News</p>
         </div>
    </div>
  )
}

export default News