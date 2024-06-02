import React from 'react';
import { IoSend } from 'react-icons/io5';

function Typesend() {
  return (
    <div className='flex space-x-2 h-[10vh] text-center bg-black'>
      <div className='w-[70%] p-1'>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </div>
      <button className='text-3xl'>
        <IoSend />
      </button>
    </div>
  );
}

export default Typesend;
