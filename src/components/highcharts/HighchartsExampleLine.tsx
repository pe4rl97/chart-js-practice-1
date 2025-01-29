import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const HighchartsExampleLine:React.FC = () => {
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
      enabled: true, // Enables the export/download button
      buttons: {
        contextButton: {
          menuItems: [
            "viewFullscreen",
            "printChart",
            "separator",
            "downloadPNG",
            "downloadJPEG",
            "downloadPDF",
            "downloadSVG",
            "separator",
            "downloadCSV",
            "downloadXLS",
          ],
        },
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighchartsExampleLine;
