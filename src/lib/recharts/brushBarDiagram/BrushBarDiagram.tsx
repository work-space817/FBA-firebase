import React, { FC } from "react";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface IBrushBarDiagram {
  statisticData: any[];
}
const BrushBarDiagram: FC<IBrushBarDiagram> = ({ statisticData }) => {
  return (
    <ResponsiveContainer width="100%" height={400} className="">
      <BarChart
        data={statisticData}
        margin={{
          left: -10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="day" height={30} stroke="#8884d8" travellerWidth={15} />
        <Bar dataKey={"income"} fill="#82ca9d" />
        <Bar dataKey={"outcome"} fill="#ed3737" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BrushBarDiagram;
