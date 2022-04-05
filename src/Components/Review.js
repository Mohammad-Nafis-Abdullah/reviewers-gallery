import React from 'react';

const Review = ({review}) => {
    const {reviewerImg:img,reviewerName:name,description,ratings} = review;

    return (
        <div className='review-card relative'>
            <img src={img} alt="" />
            <h3>{name},</h3>
            <p><b className='text-4xl absolute left-[7.5%] top-[46%]'>“</b>{description}<b className='text-4xl absolute right-[10%] bottom-[12%]'>”</b></p>
            <h5>Ratings : {ratings}</h5>
        </div>
    );
};

export default Review;