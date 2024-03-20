import { Link } from "react-router-dom";

export default function SubmitPage() {
    const handleClick = () => {
        console.log('first')
    }

    return (
        <>
            <div className="bg-black w-full h-dvh text-white flex flex-col items-center justify-center relative">
                <div className="w-[40rem] h-[40rem] opacity-5 absolute">
                    <img src="/img/Senech-white.png" alt="" className="w-full h-full object-cover" />
                </div>

                <div  className="flex flex-col gap-5">
                    <h1>Thanks for visiting my website🙌</h1>
                        <Link to={'/contact'} className="bg-yellow-500 text-lg text-black p-5 flex items-center justify-center z-50" onClick={handleClick}>
                            <button>Back</button>
                        </Link>
                </div>
            </div>
        </>
    )
}