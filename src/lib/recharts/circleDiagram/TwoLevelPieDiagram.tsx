import React, { FC } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ITwoLevelPieDiagram {
  outterData: any[];
  innerData: any[];
}
const TwoLevelPieDiagram: FC<ITwoLevelPieDiagram> = ({
  outterData,
  innerData,
}) => {
  // const innerCOLORS = [
  //   "#770ef8",
  //   "#0088FE",
  //   "#3d85c6 ",
  //   "#00C49F",
  //   "#00BB28",
  //   "#FF8042",
  //   "#fc9ea3",
  //   "#f8ec0e ",
  // ];
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

  return (
    <ResponsiveContainer width="100%" height={250} className="">
      <PieChart width={400} height={400}>
        <Pie
          data={outterData}
          dataKey="summaryCount"
          innerRadius={60}
          outerRadius={80}
          fill="color"
          label
          //   label={renderCustomizedLabel}
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
          dataKey="summaryGoalCount"
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
