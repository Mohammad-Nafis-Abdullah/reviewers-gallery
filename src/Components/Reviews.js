import React from 'react';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import Review from './Review';

const Reviews = () => {
    const reviews = useFetch('reviews.json');

    return (
        <div className='container mx-auto mt-10 py-5 px-5 min-h-screen fadeIn'>
            <section className='py-5 mt-8 flex flex-wrap justify-center gap-5'>
                <h2 className='basis-full text-center text-2xl sm:text-3xl font-medium text-slate-800 underline'>Customer Reviews</h2>
                {
                    reviews.length?reviews.map(review =><Review key={review.id} review={review}/>):<Loading/>
                }
            </section>
        </div>
    );
};

export default Reviews;