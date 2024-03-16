import { IoMdContact, IoMdHome, IoMdInformationCircle } from "react-icons/io";
import { IoFileTrayFull } from "react-icons/io5";
import { Link } from "react-router-dom";

export function Sidebar({onShowSidebar}){


    return(
        <>
            <div className={onShowSidebar ? "absolute bg-black w-60 h-[50rem] translate-y-[431px] -translate-x-3 z-40 transition-all duration-500" : "absolute bg-black w-60 h-[50rem] translate-y-[431px] -translate-x-96 z-40 transition-all duration-500"}>
                <ul className="p-5 text-white flex flex-col gap-10 text-lg">
                    <Link to={'/'}>
                        <li className="flex items-center gap-2"><IoMdHome className="text-2xl"/> Home</li>
                    </Link>

                    <Link to={'/about'}>
                        <li className="flex items-center gap-2"><IoMdInformationCircle className="text-2xl"/> About</li>
                    </Link>

                    <Link to={'/portfolio'}>
                        <li className="flex items-center gap-2"><IoFileTrayFull className="text-2xl"/> Portfolio</li>
                    </Link>

                    <Link to={'/contact'}>
                        <li className="flex items-center gap-2"><IoMdContact className="text-2xl"/> Contact</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}