import React from "react";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const SellRadar = ({data}) => {
    return (
        <RadarChart cx={160} cy={200} outerRadius={135} width={320} height={410} data={data} className='mx-auto'>
            <PolarGrid />
            <PolarAngleAxis dataKey="month" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Sell" dataKey="sell" stroke="#0d0d0d" fill="#262626" fillOpacity={0.5} />
            <Legend />
        </RadarChart>
    );
};

export default SellRadar;