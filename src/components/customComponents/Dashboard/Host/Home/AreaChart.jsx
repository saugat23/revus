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
    name: "Jan",
    product1: 250,
    product2: 100,
  },
  {
    name: "Feb",
    product1: 200,
    product2: 150,
  },
  {
    name: "Mar",
    product1: 270,
    product2: 90,
  },
  {
    name: "Apr",
    product1: 320,
    product2: 150,
  },
  {
    name: "May",
    product1: 260,
    product2: 170,
  },
  {
    name: "Jun",
    product1: 200,
    product2: 130,
  },
  {
    name: "Jul",
    product1: 270,
    product2: 90,
  },
  {
    name: "Aug",
    product1: 190,
    product2: 130,
  },
  {
    name: "Sep",
    product1: 230,
    product2: 160,
  },
  {
    name: "Oct",
    product1: 200,
    product2: 130,
  },
  {
    name: "Nov",
    product1: 180,
    product2: 90,
  },
  {
    name: "Dec",
    product1: 220,
    product2: 130,
  },
];

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart className="w-full h-full" data={productSales}>
        <defs>
          <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
            <stop offset="100%" stopColor="#006AFF" stopOpacity={0.5} />
            <stop offset="30%" stopColor="#FFFFFF" stopOpacity={0.5} />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="colorUvGray" x1="1" y1="1" x2="0" y2="0">
            <stop offset="100%" stopColor="#6B7280" stopOpacity={0.5} />
            <stop offset="30%" stopColor="#FFFFFF" stopOpacity={0.5} />
          </linearGradient>
        </defs>
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip />
        <Area
          type="monotone"
          dataKey="product1"
          stroke="#6B7280"
          fill="url(#colorUvGray)"
          stackId="1"
        />
        <Area
          type="monotone"
          dataKey="product2"
          stroke="#006AFF"
          fill="url(#colorUv)"
          stackId="1"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
