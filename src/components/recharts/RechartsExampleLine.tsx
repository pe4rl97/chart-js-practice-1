import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const lineData = [
    { name: "2017", react: 32, angular: 37, vue: 60 },
    { name: "2018", react: 42, angular: 42, vue: 54 },
    { name: "2019", react: 51, angular: 41, vue: 54 },
    { name: "2020", react: 60, angular: 37, vue: 28 },
    { name: "2021", react: 51, angular: 31, vue: 27 },
    { name: "2022", react: 95, angular: 44, vue: 49 },
];

const RechartsExampleLine: React.FC = () => {
  return (
    <>
      <ResponsiveContainer aspect={1.5}>
        <LineChart data={lineData}>
            <Line type={"monotone"} dataKey={"react"} stroke='#2196F3' strokeWidth={3}/>
            <Line type={"monotone"} dataKey={"angular"} stroke='#F44236' strokeWidth={3}/>
            <Line type={"monotone"} dataKey={"vue"} stroke='#FFCA29' strokeWidth={3}/>
            <CartesianGrid stroke='#ccc'/>
            <XAxis dataKey={"name"}/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export default RechartsExampleLine