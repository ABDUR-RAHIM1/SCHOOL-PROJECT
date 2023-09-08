import React from 'react'
import Items from './Items'
import Profile from './Profile'
import img from "../../../assets/images/mujib.png"

function Sidebar({ item }) {
  console.log(item)
  return (
    <div className='h-90vh w-full overflow-x-hidden text-center overflow-y-auto scrollbar-hide'>
      <Profile
        title="dashboard"
        name="teacher"
        photo={img}
      />
      {

        item && item.map((item, indx) => (
          <Items
            key={indx}
            item={item}
          />
        ))
      }
    </div>
  )
}

export default Sidebar