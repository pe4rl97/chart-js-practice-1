import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const HighchartsExampleBar: React.FC = () => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Yearly Views and Subscribers",
    },
    xAxis: {
      categories: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
      title: { text: "Year" },
    },
    yAxis: {
      title: { text: "Count" },
    },
    tooltip: {
      shared: true,
      valueSuffix: "",
    },
    plotOptions: {
      column: {
        borderRadius: 5,
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: "Views",
        data: [1000, 1250, 2600, 3000, 2300, 4500, 5000, 6000],
        color: "#2196F3",
      },
      {
        name: "Subscribers",
        data: [30, 70, 90, 200, 250, 300, 400, 500],
        color: "#82CA9D",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighchartsExampleBar;
