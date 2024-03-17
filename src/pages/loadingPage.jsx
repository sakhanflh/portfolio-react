import React from 'react';

export default function LoadingPage(){
    return(
        <>
            <div className="w-full h-dvh bg-black text-white flex flex-col items-center justify-center">
                <div className='w-60 h-60'>
                    <img src="/img/Senech-white.png" alt="" className='animate-bounce w-full h-full object-cover'/>
                </div>
            </div>
        </>
    )
}