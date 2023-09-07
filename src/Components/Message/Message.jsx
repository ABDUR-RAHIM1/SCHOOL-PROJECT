import React from 'react'

function Message({message}) {
  return (
    <div>
      {  message.includes("successfully") ?  <p className='text-green-700 text-center'>{message}</p> :  <p className='text-red-700 text-center'>{message}</p>}
    </div>
  )
}

export default Message