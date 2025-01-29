import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const HighchartsExamplePie: React.FC = () => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Expense Breakdown",
    },
    tooltip: {
      pointFormat: "<b>${point.y}</b>",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "{point.name}: {point.percentage:.1f}%",
        },
      },
    },
    series: [
      {
        name: "Expenses",
        data: [
          { name: "Flat", y: 1000, color: "#0088FE" },
          { name: "Food", y: 500, color: "#00C49F" },
          { name: "Transportation", y: 600, color: "#FFBB28" },
          { name: "Eating Out", y: 400, color: "#FF8042", sliced: true, selected: true, },
          { name: "Flight", y: 300, color: "#F44236" },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighchartsExamplePie;
