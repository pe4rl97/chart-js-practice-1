import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'
import { pieChartData } from '../../data/FakeData'

ChartJS.register(
    Tooltip, 
    Legend,
    ArcElement
)

const PieChart: React.FC = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom" as const,
            },
            title: {
                display: true,
                text: "Daily Social Media Usage"
            }
        }
    };
    return (
        <>
            <Pie options={options} data={pieChartData}></Pie>
        </>
    )
}

export default PieChart