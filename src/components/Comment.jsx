import React from 'react'

const Comment = ({email, body}) => {
  return (
    <div className='mx-14'>
        <h3 className='pt-10 pb-3 font-bold'>{email}</h3>
        <p className='pb-10 text-gray-500'>{body}</p>
        <hr className='border-gray-300'/>
    </div>

    
  )
}

export default Comment