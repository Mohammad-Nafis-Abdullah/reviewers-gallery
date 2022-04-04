import React from 'react';
import useFetch from '../hooks/useFetch';
import RevenueChart from './RevenueChart';
import SellRadar from './SellRadar'

const Dashboard = () => {
    const data = useFetch('chartData.json')

    return (
        <div className='container mx-auto px-5 my-16 flex justify-evenly items-end gap-x-5 gap-y-20 flex-wrap'>
            <div className='basis-[330px] pt-5'>
                <h2 className='text-2xl font-medium text-center underline decoration-[3px] underline-offset-2'>Month wise Sell</h2>
                <SellRadar data={data}/>
            </div>

            <div className='basis-[330px]'>
                <h2 className='text-2xl font-medium text-center underline decoration-[3px] underline-offset-2'>Investment and Revenue</h2>
                <RevenueChart data={data}/>
            </div>
        </div>
    );
};

export default Dashboard;