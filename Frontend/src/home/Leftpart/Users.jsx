import React from 'react';
import User from './User';
import useGetAllUsers from '../../context/useGetAllUsers';

function Users() {
  const [ allUsers, loading] = useGetAllUsers();
  console.log(allUsers);
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
        Messages
      </h1>
      <div className='flex-1 py-2 overflow-y-auto' style={{maxHeight: "calc(84vh - 18vh)"}}>
        {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;
