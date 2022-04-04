import React from 'react';
import { useNavigate } from 'react-router-dom';
import CoverImage from '../frontPage.jpg'
import useFetch from '../hooks/useFetch'
import Loading from './Loading';
import Review from './Review';

const Home = () => {
    const navigate = useNavigate();
    const reviews = useFetch('reviews.json');
    const croppedReviews = reviews.slice(0,3);


    return (
        <div className='container mx-auto mt-20 py-5 px-5 min-h-screen'>

            <section className=' flex justify-center flex-wrap-reverse gap-x-16 gap-y-5'>
                <div className='basis-[31rem] shrink flex flex-col justify-center p-1 gap-5'>
                    <h1 className='text-3xl sm:text-4xl font-medium text-slate-900/80'>Our <strong className='text-slate-900'>Watches</strong> are just for your <strong className='text-slate-900'>Happines</strong></h1>
                    <p className='text-lg text-justify text-slate-700'>At <strong className='text-slate-900'>Watch Arena</strong>, we can guarantee you will find more watch brands than anywhere else. From the biggest designer brands, to the best of luxury and some hidden gems, along with outstanding service and next day delivery, WatchShop is the hottest place to buy your next watch.</p>
                    <button className='btn-dark self-start'>Click here</button>
                </div>
                <img className='max-w-xs w-full min-w-[320px] grow-0 shrink rounded-3xl outline-none hover:scale-105 transition duration-500' src={CoverImage} alt="" />
            </section>
            
            <section className='py-5 mt-8 flex flex-wrap justify-center gap-5'>
                <h2 className='basis-full text-center text-2xl sm:text-3xl font-medium text-slate-800 underline'>Customer Reviews</h2>
                {
                    croppedReviews.length?croppedReviews.map(review =><Review key={review.id} review={review}></Review>):<Loading/>
                }
                <div className='h-20 basis-full flex justify-center items-center'>
                    <button className='btn-dark' onClick={()=> navigate('/reviews')}>See All Reviews</button>
                </div>
            </section>
        </div>
    );
};

export default Home;