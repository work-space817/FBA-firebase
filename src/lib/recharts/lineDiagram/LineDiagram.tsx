import React, { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ILiniarDiagram {
  statisticData: any[];
}
const LineDiagram: FC<ILiniarDiagram> = ({ statisticData }) => {
  return (
    <ResponsiveContainer width="100%" height={175}>
      <LineChart data={statisticData} margin={{ left: -20, right: 5 }}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="date" />
        <YAxis domain={["auto", "auto"]} />
        <Tooltip />
        <Line type="monotone" dataKey="rate" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineDiagram;
