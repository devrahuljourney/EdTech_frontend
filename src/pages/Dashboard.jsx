import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"

import Sidebar from "../components/core/Dashboard/Sidebar"
import { useState } from "react"

function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)

  const [menu,setMenu] = useState(false);
  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      <div className={` ${menu && ' lg:-ml-[20%] -ml-[240px] ' } transition-all duration-200 `} > <Sidebar  /> </div>
      <button className={` ${!menu ? "ml-[1%]" : "ml-[7%]" } md:-mt-[42%]  -mt-[100%] md:mb-0 mb-[30%] transition-all duration-200`} onClick={() => setMenu(!menu) } > <AiOutlineMenu style={{color:"white", width:"30px", height:"30px" }} /> </button>
      
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard