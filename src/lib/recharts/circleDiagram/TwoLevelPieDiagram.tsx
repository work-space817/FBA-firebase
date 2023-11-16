import React, { FC, useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import {
  IGoalByCategory,
  IGoalCircleStatisticList,
} from "../../../components/UI/diagramComponents/goalStatistic/types";

interface ITwoLevelPieDiagram {
  outterData: IGoalCircleStatisticList[];
  innerData: IGoalByCategory[];
}
const TwoLevelPieDiagram: FC<ITwoLevelPieDiagram> = ({
  outterData,
  innerData,
}) => {
  const RADIAN = Math.PI / 180;
  //add useDebounce
  // const renderCustomizedLabel = ({
  //   cx,
  //   cy,
  //   midAngle,
  //   innerRadius,
  //   outerRadius,
  //   percent,
  //   index,
  //   e,
  // }: any) => {
  //   console.log(e);
  //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);

  //   return (
  //     <text
  //       className="fs--2 text-dark"
  //       x={x}
  //       y={y}
  //       textAnchor={x > cx ? "start" : "end"}
  //       dominantBaseline="central"
  //     >
  //       {`${(percent * 100).toFixed(0)}%`}
  //     </text>
  //   );
  // };
  const innerCOLORS = [
    "#0088FE",
    "#00FF00",
    "#FFFF00",
    "#FF7F00",
    "#fc9ea3",
    "#ff00ff ",
    "#9400D3",
    "#4B0082",
    "#0000FF ",
  ];
  // const renderActiveShape = (props: any) => {
  //   const RADIAN = Math.PI / 180;
  //   const { cx, cy, midAngle, outerRadius, percent, value } = props;
  //   const sin = Math.sin(-RADIAN * midAngle);
  //   const cos = Math.cos(-RADIAN * midAngle);
  //   const mx = cx + (outerRadius + 20) * cos;
  //   const my = cy + (outerRadius + 20) * sin;
  //   const ex = mx + (cos >= 0 ? 1 : -1) * 12;
  //   const ey = my;
  //   const textAnchor = cos >= 0 ? "start" : "end";
  //   return (
  //     <g>
  //       <text
  //         className="border"
  //         x={ex + (cos >= 0 ? 1 : -1) * 8}
  //         y={ey}
  //         textAnchor={textAnchor}
  //         fill="#333"
  //       >{`${value} UAH`}</text>
  //       <text
  //         x={ex + (cos >= 0 ? 1 : -1) * 8}
  //         y={ey}
  //         dy={18}
  //         textAnchor={textAnchor}
  //         fill="#999"
  //       >
  //         {`(${(percent * 100).toFixed(2)}%)`}
  //       </text>
  //     </g>
  //   );
  // };
  // const [activeIndex, setActiveIndex] = useState(0);
  // const onPieEnter = useCallback(
  //   (_: any, index: number) => {
  //     setActiveIndex(index);
  //   },
  //   [setActiveIndex]
  // );
  return (
    <ResponsiveContainer width="100%" height={250} className="">
      <PieChart width={400} height={400}>
        <Pie
          data={outterData}
          dataKey="summaryCount"
          innerRadius={60}
          outerRadius={80}
          fill="color"
        >
          {outterData.map((doc, index) => (
            <Cell
              key={`cell-${index}`}
              fill={doc.isExpire ? "#FF0e42" : "#36de22"}
            />
          ))}
        </Pie>

        <Pie
          data={innerData}
          labelLine={false}
          outerRadius={50}
          fill="#b30e42"
          // label={renderCustomizedLabel}
          dataKey="summaryGoalCount"
          // activeIndex={activeIndex}
          // activeShape={renderActiveShape}
          // onMouseEnter={onPieEnter}
        >
          {innerData.map((entry, index) => (
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
