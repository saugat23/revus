"use client";

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function DonutChart() {
  const [series] = useState([54, 20, 26]);

  const [options] = useState({
    chart: {
      height: 80,
      width: 80,
      type: "donut",
    },
    labels: ["Total Hired", "Total Cancelled", "Total Pending"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          size: "60%",
        },
      },
    },
    legend: {
      position: "bottom",
      fontSize: "14px",
      fontFamily: "Montserrat, sans-serif",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 100,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  return (
    <>
      <div>
        <div id="chart">
          <ReactApexChart options={options} series={series} type="donut" />
        </div>
        <div id="html-dist"></div>
      </div>
    </>
  );
}
