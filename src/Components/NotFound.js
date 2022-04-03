import React from 'react';

const NotFound = () => {

    return (
        <div className='container h-[calc(100vh-80px)] mx-auto flex justify-center items-center'>
            <div className=''>
                <h1 className='text-center text-white drop-shadow-[0px_5px_5px_#ff0000c6] text-8xl sm:text-[15rem] font-bold cursor-not-allowed animate-bounce leading-[0.7]'>404</h1>
                <p className='text-center text-xl sm:text-6xl drop-shadow-[0px_0px_0] text-red-600/80 font-bold'>
                    Page Not Found
                </p>
            </div>
        </div>
    );
};

export default NotFound;