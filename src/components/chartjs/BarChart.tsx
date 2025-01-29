import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { barChartData } from '../../data/FakeData'

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend
)

const BarChart: React.FC = () => {
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Expenses Bar Chart',
            }, 
            legend: {
                display: true,
                position: 'top' as const,
                labels: {
                    color: 'rgb(0, 0, 0)'
                }
            }
        },
    };
    return (
        <>
            <Bar options={options} data={barChartData}></Bar>
        </>
    )
}

export default BarChart