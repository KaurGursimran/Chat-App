import React from 'react';

function ChatUser() {
  return (
    <div className='flex h-[14vh] p-2 bg-gray-800 hover:bg-gray-700 duration-300'>
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className='px-4'>
        <h1 className='text-xl'>Akhil k</h1>
        <span>Offline</span>
      </div>
    </div>
  );
}

export default ChatUser;
