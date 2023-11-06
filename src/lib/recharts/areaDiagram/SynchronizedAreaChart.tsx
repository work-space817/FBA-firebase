import { FC, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ISynchronizedAreaChart {
  statisticData: any[];
}
const SynchronizedAreaChart: FC<ISynchronizedAreaChart> = ({
  statisticData,
}) => {
  return (
    <>
      <h6 className="py-2">Incoming statistic per year</h6>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={statisticData}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={"income"}
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
      <h6 className="py-2">Outcoming statistic per year</h6>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={statisticData}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="outcome"
            stroke="#ed3737"
            fill="#ed3737"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default SynchronizedAreaChart;
