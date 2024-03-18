import { Link } from "react-router-dom";
import { Header } from "../fragments/Header";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { ValidationError, useForm } from "@formspree/react";

export default function ContactPage() {
    const [state, handleSubmit] = useForm("xgegwpeb")
    if (state.succeeded) {
        window.location.href='/submit'
    }

    return (
        <>
            <div className="w-full bg-black text-white select-none">
                <Header />

                <div className="pt-24 w-full flex flex-col items-center px-5 gap-5 pb-5">
                    <p className="text-textcolor text-lg">Social Media</p>

                    <div className="w-full bg-bgcolor p-5 flex flex-col gap-3 rounded-lg">
                        <Link to={'https://www.instagram.com/sakhanflh?igsh=MWx0a2pucWZ6b2E4eg=='}>
                            <p className="flex items-center gap-2"><FaInstagram className="text-xl" /> sakhanflh_</p>
                        </Link>
                    </div>

                    <div className="w-full bg-bgcolor p-5 flex flex-col gap-3 rounded-lg">
                        <Link>
                            <p className="flex items-center gap-2"><SiGmail className="text-xl" /> sakhanaufal2@gmail.com</p>
                        </Link>
                    </div>
                    <div className="w-full bg-bgcolor p-5 flex flex-col gap-3 rounded-lg">
                        <Link to={'https://github.com/sakhanflh'} target="_blank">
                            <p className="flex items-center gap-2"><FaGithub className="text-xl" /> sakhanflh</p>
                        </Link>
                    </div>

                    <p className="text-center text-textcolor px-5">Thank you for visiting my website, let me know if you have something to say</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full bg-bgcolor p-5 rounded-lg ">
                        {/* Fullname */}
                        <div className="flex justify-between items-center">
                            <label htmlFor="name">Name :</label>
                            <input type="text" name="name" id="name" className="w-56 p-2 text-black rounded-sm" />
                            <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>
                        {/* Fullname End */}
                        {/* Email */}
                        <div className="flex justify-between items-center">
                            <label htmlFor="email">Email :</label>
                            <input type="email" id="email" name="email" className="w-56 p-2 text-black rounded-sm" />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        {/* Email End */}

                        <div className="flex justify-between items-center">
                            <label htmlFor="subject">Subject :</label>
                            <input type="text" name="subject" id="subject" className="w-56 p-2 text-black rounded-sm" />
                            <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                        </div>

                        {/* Message */}
                        <div className="flex justify-between items-center">
                            <label htmlFor="message">Message :</label>
                            <textarea id="message" name="message" className="w-56 p-2 text-black rounded-sm" />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>
                        {/* Message End */}

                        <button type="submit" disabled={state.submitting} className="w-full px-14">
                            <p className="bg-yellow-500 text-lg text-black rounded-lg p-3">Submit</p>
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}