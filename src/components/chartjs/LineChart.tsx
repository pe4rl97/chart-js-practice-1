import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { lineChartData } from '../../data/FakeData'

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend
)

const LineChart: React.FC = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom" as const,
            },
            title: {
                display: true,
                text: "Daily Steps"
            }
        }
    };
    return (
        <>
            <Line options={options} data={lineChartData}></Line>
        </>
    )
}

export default LineChart