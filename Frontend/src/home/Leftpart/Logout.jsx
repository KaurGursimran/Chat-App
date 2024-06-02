import React, { useState } from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import axios from "axios";
import Cookies from "js-cookie";

function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      alert("Logged out successfully");
      window.loading.reload();
    } catch (error) {
      console.log("error in logout", error);
    }
  }
  return (
    <div className='h-[10vh]'>
      <div>
        <BiLogOutCircle onClick={handleLogout} className='text-5xl text-white hover:bg-slate-700 cursor-pointer rounded-full p-2 ml-2 mt-2'/>
      </div>
    </div>
  );
}

export default Logout;
