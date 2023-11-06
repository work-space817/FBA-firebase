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
  { name: "00", uv: 400, pv: 240 },
  { name: "03", uv: 300, pv: 139 },
  { name: "06", uv: 200, pv: 980 },
  { name: "09", uv: 278, pv: 390 },
  { name: "12", uv: 289, pv: 480 },
  { name: "15", uv: 239, pv: 380 },
  { name: "18", uv: 278, pv: 689 },
  { name: "21", uv: 189, pv: 480 },
  { name: "00", uv: 120, pv: 280 },
];

const LineDiagram = () => {
  return (
    <ResponsiveContainer width="100%" height={175}>
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
