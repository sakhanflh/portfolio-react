import RunningText from "../components/RunningText";
import { Header } from "../fragments/Header";

export default function HomePage(){
    const texts = ['Frontend Developer', 'Backend Developer', 'Cyber Security ASAP']


    return(
        <>
        <div className="bg-black w-full h-dvh">
            <Header/>

            <div className="w-full text-white pt-32 px-5 flex flex-col items-center gap-5">
                <div className="w-60 h-60 rounded-full border-2 border-textcolor overflow-hidden">
                    <img src="/img/Sakha2.jpg" alt="" className="object-cover w-full h-full"/>
                </div>

                <div className="text-white  gap-2 flex flex-col text-center xl:text-start">
                    <h1 className="text-textcolor text-lg font-semibold">Hello World, I'm</h1>
                    <h1 className="text-lg font-semibold">Sakha Naufal Huda</h1>
                    <div className="w-full h-6">
                        <RunningText texts={texts}/>
                    </div>
                    <p>Welcome to My personal website🙌</p>
                </div>

            </div>
        </div>
        </>
    )
}