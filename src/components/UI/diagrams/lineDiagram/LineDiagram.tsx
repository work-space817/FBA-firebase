import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "00", uv: 4000, pv: 2400, amt: 2400 },
  { name: "03", uv: 3000, pv: 1398, amt: 2210 },
  { name: "06", uv: 2000, pv: 9800, amt: 2290 },
  { name: "09", uv: 2780, pv: 3908, amt: 2000 },
  { name: "12", uv: 2890, pv: 4800, amt: 2181 },
  { name: "15", uv: 2390, pv: 3800, amt: 2500 },
  { name: "18", uv: 2780, pv: 6899, amt: 2000 },
  { name: "21", uv: 1890, pv: 4800, amt: 2181 },
  { name: "00", uv: 1200, pv: 2800, amt: 1181 },
];

const LineDiagram = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ left: -10 }}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineDiagram;
