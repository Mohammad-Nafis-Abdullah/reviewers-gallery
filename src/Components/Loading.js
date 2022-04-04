import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center mt-40'>
            <div className='h-16 w-16 border-8 border-black rounded-full border-l-0 border-r-0 animate-spin'></div>
        </div>
    );
};

export default Loading;