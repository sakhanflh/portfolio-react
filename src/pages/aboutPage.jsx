import { Header } from "../fragments/Header";

export default function AboutPage(){
    return(
        <>
            <div className="w-full gap-16 flex flex-col bg-black">
                <Header/>

                <div className=" w-full  pt-24 text-white px-5">
                    <div className="w-full bg-bgcolor rounded-xl p-5 flex flex-col items-center gap-3">
                        <div className="flex gap-2 text-textcolor">
                            <h1 className="text-lg font-montserat">About Me</h1>
                            <div>
                                <p className="-translate-y-[3px]">________________________</p>
                            </div>
                        </div>
                        
                        <div className="border-2 border-textcolor w-44 h-44 rounded-full overflow-hidden">
                            <img src="/img/sakha3.jpg" alt="" className="w-full h-full object-cover"/>
                        </div>

                        <div className="flex gap-5 flex-col w-full">
                            <p className="text-justify"><span className="pl-6"></span> Hello World, let me introduce my self. My name is Sakha Naufal Huda, i was born in Purwakarta on 2 February 2003, i'm studying at Unindra University.</p>
                            <p className="text-justify"><span className="pl-6"></span> The reason I'm entered the IT field because i'm really like technological development, and i want to start an IT carrer as a Frontend Developer, but actually i want to be Cyber Security, but i have to learn a lot's of things first.</p>
                        </div>
                    </div>
                </div>
                {/* History Of School */}
                <div className="w-full pb-10 px-5 bg-black flex flex-col items-center text-white gap-5">
                    <h1 className="text-textcolor text-lg">Education History</h1>
                    <div className="w-full p-5 bg-bgcolor rounded-lg">
                        <h1 className="text-textcolor text-lg">Elementary School</h1>
                        <p>SDN Limo 02</p>
                        <p>Limo, Depok</p>
                        <p>2009 - 2015</p>
                    </div>

                    <div className="w-full p-5 bg-bgcolor rounded-lg">
                        <h1 className="text-textcolor text-lg">Junior High School</h1>
                        <p>SMP Negeri 17 Depok</p>
                        <p>Gandul, Depok</p>
                        <p>2015 - 2018</p>
                    </div>

                    <div className="w-full p-5 bg-bgcolor rounded-lg">
                        <h1 className="text-textcolor text-lg">Senior High School</h1>
                        <p>SMA Negeri 9 Depok</p>
                        <p>Cinere, Depok</p>
                        <p>IPS</p>
                        <p>2018 - 2021</p>
                    </div>

                    <div className="w-full p-5 bg-bgcolor rounded-lg">
                        <h1 className="text-textcolor text-lg">University</h1>
                        <p>Universitas Indraprasta PGRI</p>
                        <p>Ps. Rebo, Jakarta Timur</p>
                        <p>Teknik Informatika</p>
                        <p>2021 - 2025</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}