import { useState } from "react";
import { IoIosMoon, IoMdMenu } from "react-icons/io";
import { Sidebar } from "../components/Sidebar";

export function Header(){
    const [showSidebar, setShowSidebar] = useState(false)

    function handleShowSidebar(){
        setShowSidebar(!showSidebar)
    }



    return(
        <>
            <div className="bg-black w-full h-16 fixed z-50 flex items-center justify-between px-3">
                <div>
                    <IoMdMenu className="text-textcolor text-3xl" onClick={handleShowSidebar}/>
                </div>
                
                <div className="w-14">
                    <img src="/img/Senech-white.png" alt="" />
                </div>

                <div>
                    <IoIosMoon className="text-4xl text-textcolor"/>
                </div>
                <Sidebar onShowSidebar={showSidebar}/>
            </div>
        </>
    )
}