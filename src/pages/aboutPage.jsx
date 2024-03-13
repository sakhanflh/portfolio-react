import { Header } from "../fragments/Header";

export default function AboutPage(){
    return(
        <>
            <div className="w-full h-dvh">
                <Header/>

                <div className="bg-black w-full h-full pt-24 text-white px-5">
                    <div className="w-full h-[35rem] bg-bgcolor rounded-xl p-5 flex flex-col items-center gap-3">
                        <div className="flex gap-2 text-textcolor">
                            <h1 className="text-lg font-montserat">About Me</h1>
                            <div>
                                <p className="-translate-y-[3px]">_______________________________</p>
                            </div>
                        </div>
                        
                        <div className="border-2 border-textcolor w-52 h-52 rounded-full overflow-hidden">
                            <img src="/img/sakha3.jpg" alt="" className="w-full h-full object-cover"/>
                        </div>

                        <div className="flex gap-5 flex-col w-full">
                            <p className="text-justify"><span className="pl-6"></span> Hello World, let me introduce my self. My name is Sakha Naufal Huda, i was born in Purwakarta on 2 February 2003, i'm studying at Unindra University.</p>
                            <p className="text-justify"><span className="pl-6"></span> The reason I'm entered the IT field because i'm really like technological development, and i want to start an IT carrer as a Frontend Developer, but actually i want to be Cyber Security, but i have to learn a lot's of things first.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}