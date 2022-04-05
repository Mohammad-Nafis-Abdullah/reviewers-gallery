import React from 'react';

const About = () => {
    return (
        <div className='flex justify-center items-center px-5 pb-10 mt-32 gap-3 flex-wrap'>
            <div className='max-w-xs border shadow-md bg-slate-400/10 rounded p-3 fromLeft'>
                <img src="https://i.pinimg.com/originals/f1/13/90/f113905fe574931e323146cbf829edc1.jpg" alt="" className='max-h-40 w-full object-cover object-top rounded'/>
                <h3 className='text-xl text-gray-900 font-medium my-3 uppercase'>Chittagong Branch :</h3>
                <p className='text-lg font-medium text-gray-800 underline decoration-2'>Address :</p><address className='text-lg font-medium text-gray-700 no-underline'>Lane No. 02, Road No. 01, K-Block R/A, Halishahar, Chittagong</address>
            </div>
            <div className='max-w-xs border shadow-md bg-slate-400/10 rounded p-3 fromRight'>
                <img src="https://thumbs.dreamstime.com/b/bangladesh-april-top-views-empty-shapla-chattar-motijheel-coronavirus-shutdown-movement-dhaka-178442642.jpg" alt="" className='max-h-40 w-full object-cover rounded' />
                <h3 className='text-xl text-gray-900 font-medium my-3 uppercase'>Dhaka Branch :</h3>
                <p className='text-lg font-medium text-gray-800 underline decoration-2'>Address :</p><address className='text-lg font-medium text-gray-700 no-underline'>14/a, Road No. 05, Elephant Road, Dhaka</address>
            </div>
        </div>
    );
};

export default About;