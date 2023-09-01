import React from 'react'

function MsgCard ({msg}) {
    return (
      <div className='flex'>
      <i class="fa fa-user-circle pt-3" aria-hidden="true"></i>
      <div className='text-white bg-blue-400 p-2 m-2 rounded-lg'>
          
          <h4>{msg}</h4>
      </div>
      </div>
    )
  }

export default MsgCard