"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const productSales = [
  {
    name: "Mon",
    product1: 250,
  },
  {
    name: "Tue",
    product1: 200,
  },
  {
    name: "Wed",
    product1: 270,
  },
  {
    name: "Thu",
    product1: 320,
  },
  {
    name: "Fri",
    product1: 260,
  },
  {
    name: "Sat",
    product1: 200,
  },
  {
    name: "Sun",
    product1: 270,
  },
];

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart className="w-full h-full" data={productSales}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#006AFF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#006AFF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="10 6" />

        <Tooltip />
        <Area
          type="linear"
          dataKey="product1"
          stroke="#006AFF"
          fill="url(#colorUv)"
          stackId="1"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
