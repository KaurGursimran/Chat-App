import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import Typesend from './Typesend'

function Right() {
  return (
    <div className='w-[70%] bg-slate-900 text-gray-300 flex-1'>
      <ChatUser/>
      <div className='flex-1 overflow-y-auto' style={{maxHeight: "calc(92vh - 16vh)"}}>
      <Messages/>
      </div>
      <Typesend/>
    </div>
  )
}

export default Right