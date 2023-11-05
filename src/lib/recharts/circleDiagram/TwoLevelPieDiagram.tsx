import React, { FC, PureComponent, useMemo, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { ICircleDiagramTypes } from "./types";

const TwoLevelPieDiagram: FC<ICircleDiagramTypes> = ({
  circleColor,
  statisticData,
}) => {
  console.log("statisticData", statisticData);

  const innerCOLORS = [
    "#770ef8",
    "#0088FE",
    "#3d85c6 ",
    "#00C49F",
    "#00BB28",
    "#FF8042",
    "#803012",
    "#fc9ea3",
    "#f8ec0e ",
  ];

  const visiblePieChartList: any[] = [];
  const data03 = statisticData.map((doc: any, index) => {
    return doc.goalsByCategory.map((goal: any) =>
      visiblePieChartList.push(goal)
    );
  });
  // console.log("data03", data03);
  console.log("visiblePieChartList", visiblePieChartList);
  return (
    <ResponsiveContainer width="100%" height={250} className="">
      <PieChart width={400} height={400}>
        <Pie
          data={statisticData}
          dataKey="summaryCount"
          innerRadius={70}
          outerRadius={90}
          fill="color"
          label
          //   label={renderCustomizedLabel}
        >
          {statisticData.map((doc, index) => (
            <Cell
              key={`cell-${index}`}
              fill={doc.isExpire ? "#FF0e42" : "#36de22"}
            />
          ))}
        </Pie>
        <Pie
          data={visiblePieChartList}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={60}
          fill="#803012"
          dataKey="summaryGoalCount"
        >
          {data03.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={innerCOLORS[index % innerCOLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default TwoLevelPieDiagram;
