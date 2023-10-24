import React, { FC, PureComponent, useMemo, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import OutcomingList from "../OutcomingList";

interface IDefaultCircleDiagramUI {
  getPercent: (percent: number) => void;
}

const DefaultCircleDiagramUI: FC<IDefaultCircleDiagramUI> = ({
  getPercent,
}) => {
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#00BB28",
    "#FF8042",
    "#fee942",
    "#FF0e42",
    "#36de22",
  ];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const formatedPercent = +(percent * 100).toFixed(0);
    console.log("formatedPercent: ", formatedPercent);
    getPercent(formatedPercent);

    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {formatedPercent}%
      </text>
    );
  };
  const transactionList = OutcomingList();
  const visiblePieChartList = transactionList.map((entry, index) => {
    return <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />;
  });
  return (
    <ResponsiveContainer width="100%" height={175} className="">
      <PieChart width={400} height={400}>
        <Pie
          data={transactionList}
          cx="50%"
          cy="50%"
          labelLine={false}
          // label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="summaryValue"
        >
          {visiblePieChartList}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DefaultCircleDiagramUI;
