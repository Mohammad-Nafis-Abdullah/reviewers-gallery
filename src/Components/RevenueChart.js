import React, { useState, useCallback } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

export default function RevenueChart({data}) {
    const [opacity, setOpacity] = useState({
        revenue: 1,
        investment: 1
    });

    const handleMouseEnter = useCallback(
        (o) => {
            const { dataKey } = o;

            setOpacity({ ...opacity, [dataKey]: 0.8 });
        },
        [opacity, setOpacity]
    );

    const handleMouseLeave = useCallback(
        (o) => {
            const { dataKey } = o;
            setOpacity({ ...opacity, [dataKey]: 1 });
        },
        [opacity, setOpacity]
    );

    return (
        <div>
            <LineChart
                width={340}
                height={380}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="6 6" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <Line
                    type="monotone"
                    dataKey="investment"
                    strokeOpacity={opacity.investment}
                    stroke="#8884d8"
                    activeDot={{ r: 10 }}
                />
                <Line
                    type="monotone"
                    dataKey="revenue"
                    strokeOpacity={opacity.revenue}
                    stroke="#82ca9d"
                    activeDot={{ r: 7 }}
                />
            </LineChart>
        </div>
    );
}