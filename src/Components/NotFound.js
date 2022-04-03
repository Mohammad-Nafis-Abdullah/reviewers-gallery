import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <div className='container h-screen mx-auto flex flex-col gap-20 justify-center items-center'>
            <Link to='/home' className='btn-return'>Return Home</Link>
            <div className='px-3'>
                <h1 className='text-center text-white drop-shadow-[0px_5px_5px_#ff0000c6] text-8xl sm:text-[15rem] font-bold cursor-not-allowed animate-bounce'>
                    404
                </h1>
                <p className='text-center text-xl sm:text-6xl drop-shadow-[0px_0px_0] text-red-600/80 font-bold leading-none'>
                    Page Not Found
                </p>
            </div>
        </div>
    );
};

export default NotFound;