import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ProtectedRoute({ children }) {
  const userContext = useContext(UserContext);
  console.log(userContext);

  if(!userContext.user){
    return <Navigate to="/" replace />
  }

  return(
    <>
    {/* {children} */}

    <div>
        <header className='  flex justify-between pr-5 pl-5 pt-3 bg-[#003C43] text-white  font-bold  text-lg h-14'>
            <div>
            <Link to="/dashboard">  Project Manager</Link>
            </div>
            <div>
              {/* <img className=" rounded-full h-48" src={userContext.user.avatar}></img> */}
              {userContext.user.name}
              <button
              className="ml-12"
              onClick={userContext.logoutUser}
              ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>
            </button>
            </div>
            </header>

        <div className='flex'>

        {/* <aside className='w-1/5 bg-slate-600 min-h-[100vh]'>This is a sidebar</aside> */}
        {children}
        {/* {React.Children.map(children,child => React.cloneElement(child,{...dataToSend}))} */}
        </div>

    </div>
    </>
  )
}