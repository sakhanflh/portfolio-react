import { Link } from "react-router-dom";
import { Header } from "../fragments/Header";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function ContactPage(){
    return(
        <>
            <div className="w-full bg-black text-white">
                <Header/>

                <div className="pt-24 w-full flex flex-col items-center px-5 gap-5">
                    <p className="text-textcolor text-lg">Social Media</p>
                    
                    <div className="w-full bg-bgcolor p-5 flex flex-col gap-3 rounded-lg">
                        <Link to={'https://www.instagram.com/sakhanflh?igsh=MWx0a2pucWZ6b2E4eg=='}>
                            <p className="flex items-center gap-2"><FaInstagram className="text-xl"/> sakhanflh_</p>
                        </Link>
                    </div>

                    <div className="w-full bg-bgcolor p-5 flex flex-col gap-3 rounded-lg">
                        <Link>
                            <p className="flex items-center gap-2"><SiGmail className="text-xl"/> sakhanaufal2@gmail.com</p>
                        </Link>
                    </div>
                    <div className="w-full bg-bgcolor p-5 flex flex-col gap-3 rounded-lg">
                        <Link to={'https://github.com/sakhanflh'}>
                            <p className="flex items-center gap-2"><FaGithub className="text-xl"/> sakhanflh</p>
                        </Link>
                    </div>
                </div>

                <form id="my-form" action="https://formspree.io/f/xgegwpeb" method="POST" className="p-5 py-10 gap-2 flex flex-col">
                    <p className="text-center text-lg text-textcolor">Thank you for visiting my website, let me know if you have something to say</p>
                    <div className="py-3 flex justify-between items-center">
                        <label>Full Name :</label>
                        <input type="text" name="name" className="rounded-sm p-2 text-black w-60"/>
                    </div>

                    <div className="py-3 flex justify-between items-center">
                        <label>Email :</label>
                        <input type="email" name="email" className="rounded-sm p-2 text-black w-60"/>
                    </div>
                    <div className="py-3 flex justify-between items-center">
                        <label>Subject :</label>
                        <input type="text" name="subject" className="rounded-sm p-2 text-black w-60"/>
                    </div>
                    <div className="py-3 flex justify-between items-center">
                        <label>Message :</label>
                        <textarea type="text" name="message" className="rounded-sm p-2 text-black w-60"></textarea>
                    </div>

                    <div className="flex w-full justify-center">
                        <button id="my-form-button" className="bg-bgcolor p-5 text-textcolor rounded-lg">Send my message</button>
                    </div>
                </form>
            </div>
        </>
    )
}