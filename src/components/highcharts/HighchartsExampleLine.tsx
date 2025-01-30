import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Exporting from "highcharts/modules/exporting"
import ExportData from "highcharts/modules/export-data";
import Accessibility from "highcharts/modules/accessibility";
import OfflineExporting from "highcharts/modules/offline-exporting.js"

console.log(typeof Exporting)
console.log(typeof Accessibility)
console.log(typeof ExportData)
console.log(typeof OfflineExporting)
// let Exporting1;
// Exporting1 = Exporting;
// Exporting(Highcharts);

const HighchartsExampleLine: React.FC = () => {
  const options = {
    title: {
      text: "Frontend Framework Popularity (2017-2022)",
    },
    xAxis: {
      categories: ["2017", "2018", "2019", "2020", "2021", "2022"],
      title: { text: "Year" },
    },
    yAxis: {
      title: { text: "Popularity (%)" },
    },
    tooltip: {
      shared: true,
      valueSuffix: "%",
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
    },
    series: [
      {
        name: "React",
        data: [32, 42, 51, 60, 51, 95],
        color: "#2196F3",
      },
      {
        name: "Angular",
        data: [37, 42, 41, 37, 31, 44],
        color: "#F44236",
      },
      {
        name: "Vue",
        data: [60, 54, 54, 28, 27, 49],
        color: "#FFCA29",
      },
    ],
    exporting: {
      enabled: true, // Enables exporting options
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighchartsExampleLine;
