import React from "react";
import ArrowsSVG from "../../helpers/selectorsSVG/UI/ArrowsSVG";
import LineDiagram from "../../components/UI/diagrams/lineDiagram/LineDiagram";
import AreaDiagram from "../../components/UI/diagrams/areDiagram/AreaDiagram";
import BrushBarDiagram from "../../components/UI/diagrams/brushBarDiagram/BrushBarDiagram";
import CircleDiagram from "../../components/UI/diagrams/circleDiagram/CircleDiagram";
import RadarDiagram from "../../components/UI/diagrams/radarDiagram/RadarDiagram";
import CircleDiagramList from "../../components/UI/diagrams/circleDiagram/CircleDiagramList";
const StatisticPage = () => {
  const datesLoop = () => {
    let dates = [];
    for (let i = 0; i <= 31; i++) {
      dates.push(i);
    }
    return dates;
  };

  return (
    <>
      <button className="w-100 d-flex justify-content-center align-items-center gap-2 mb-3 bg-transparent">
        <ArrowsSVG id={"ArrowLeft"} width={"1rem"} height={"1rem"} />
        <span className="rounded-pill border p-1 px-2">
          01.09.2023 - 08.10.2023
        </span>
        <ArrowsSVG id={"ArrowRight"} width={"1rem"} height={"1rem"} />
      </button>
      {/* <LineDiagram /> */}
      {/* <AreaDiagram />
          <BrushBarDiagram />
          <RadarDiagram /> */}
      <div className="d-flex mb-5 col">
        <div className="rounded-5 shadow col-3">
          <div className="p-3 pb-0">
            <h4 className="ms-2 mb-3">Circle Diagram</h4>

            <CircleDiagram />
            <CircleDiagramList />
            <CircleDiagramList />
            <CircleDiagramList />
            <button className="bg-transparent w-100 d-flex justify-content-center align-items-center my-2">
              <ArrowsSVG id={"ArrowDown"} width={"1rem"} height={"2rem"} />
            </button>
          </div>
        </div>
        {/* <div className="rounded-5 shadow col-8 border">
          <div className="p-3">
            <AreaDiagram />
          </div>
        </div> */}
      </div>
      <div className="rounded-5 shadow mb-5">
        <div className="py-3 px-2">
          <h4 className="ms-3 mb-3">Circle Diagram</h4>
          <BrushBarDiagram />
        </div>
      </div>
      <div className="rounded-5 shadow mb-5">
        <div className="py-3 px-2">
          <h4 className="ms-3 mb-3">Area Diagram</h4>
          <AreaDiagram />
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
