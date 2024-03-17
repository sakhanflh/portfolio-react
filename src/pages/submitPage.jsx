// import { useHistory } from 'react-router-dom';

export default function SubmitPage() {
    // const histroy = useHistory();

    // const handleBack = () => {
    //     histroy.push('/contact')
    // }

    return (
        <>
            <div className="bg-black w-full h-dvh text-white flex flex-col items-center justify-center relative">
                <div className="w-[40rem] h-[40rem] opacity-5 absolute">
                    <img src="/img/Senech-white.png" alt="" className="w-full h-full object-cover" />
                </div>

                <div  className="flex flex-col gap-5">
                    <h1>Thanks for visiting my website🙌</h1>
                    <button className="bg-yellow-500 text-lg text-black p-5" >Back</button>
                </div>
            </div>
        </>
    )
}