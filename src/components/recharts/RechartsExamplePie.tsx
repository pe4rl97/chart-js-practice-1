import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: "Flat", value: 1000 },
    { name: "Food", value: 500 },
    { name: "Transportation", value: 600 },
    { name: "Eating Out", value: 400 },
    { name: "Flight", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#F44236"];

const CustomTooltip = ({active, payload}: any) => {
    if (active && payload && payload.length) {
        return (
            <div className='bg-white px-3 pt-3 rounded border border-secondary shadow-lg'>
                <p className='label'>
                    {payload[0].name}: ${payload[0].value}
                </p>
            </div>
        )
    }
}

const RechartsExamplePie: React.FC = () => {
    return (
        <PieChart width={600} height={300} title='pie charrt'>
            <Pie data={data} dataKey={"value"} label>
                {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]}/>
                ))}
            </Pie>
            <Tooltip content={CustomTooltip}/>
            <Legend/>
        </PieChart>
    )
}

export default RechartsExamplePie