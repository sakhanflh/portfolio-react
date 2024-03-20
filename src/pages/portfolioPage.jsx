import { Header } from "../fragments/Header";
import { Skill } from "../fragments/Skill";

export default function PortfolioPage(){
    return(
        <>
            <div className="w-full h-dvh bg-black text-white">
                <Header/>
                <div className="pt-20 px-2">
                    <Skill />
                </div>
            </div>
        </>
    )
}