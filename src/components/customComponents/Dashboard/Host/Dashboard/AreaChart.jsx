"use client";

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [series] = useState([
    {
      name: "series1",
      data: [250, 200, 220, 180, 190, 190, 230, 240, 220, 230, 220, 210, 200],
    },
    {
      name: "series2",
      data: [100, 150, 180, 140, 170, 220, 260, 200, 160, 130, 100, 80, 100],
    },
  ]);

  const [options] = useState({
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      curve: "smooth",
      width: [1, 1],
      colors: ["#006AFF", "#6B7280"],
      dashArray: [0, 4],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      type: "month",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      show: true,
      showAlways: true,
      type: "currency",
      categories: ["$0.00", "$100k", "$200k", "$300k"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
