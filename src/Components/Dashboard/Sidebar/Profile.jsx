import React from 'react'
import img from "../../../assets/images/dashicon.png"
function Profile({ title, name, photo }) {
    return (
        <div className='my-2'>
            <h1 className='text-2xl flex items-center gap-2 font-bold uppercase'>
                <img className='w-14 rounded-md' src={img} alt="" />
                {title}</h1>
                <hr />
            <div className="profile_info my-4 text-center">
                <img className='w-16 shadow-md m-auto' src={photo} alt="profile" />
                <p className='text-md font-bold mt-2 underline'>{name}</p>
            </div>
        </div>
    )
}

export default Profile