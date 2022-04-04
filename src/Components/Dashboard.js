import React from 'react';
import useFetch from '../hooks/useFetch';
import RevenueChart from './RevenueChart';
import SellRadar from './SellRadar'

const Dashboard = () => {
    const data = useFetch('chartData.json')

    return (
        <div className='container mx-auto px-5 my-16 flex justify-evenly items-end gap-5 flex-wrap'>
            <div className='basis-[330px]'>
                <SellRadar data={data}/>
                <h4 className='text-center text-base font-medium mt-3 text-gray-900/90'><span className='underline underline-offset-2 decoration-[3px] font-bold text-gray-900'>Fig:</span> Sell per Month</h4>
            </div>
            <div className='basis-[330px]'>
                <RevenueChart data={data}/>
                <h4 className='text-center text-base font-medium mt-3 text-gray-900/90'><span className='underline underline-offset-2 decoration-[3px] font-bold text-gray-900'>Fig:</span> Invest and Revenue of Each Month</h4>
            </div>
        </div>
    );
};

export default Dashboard;