import React from "react";
import CircleDiagramList from "./CircleDiagramList";
import ArrowsSVG from "../../../../helpers/selectorsSVG/UI/ArrowsSVG";

const CircleDiagram = () => {
  return (
    <div className="rounded-5 shadow col-3">
      <div className="p-3">
        <h4 className="text-dark ms-1 mb-4">Circle diagram</h4>
        <div className="d-flex justify-content-center align-items-center">
          <div className="mb-3 border rounded-circle d-flex justify-content-center align-items-center cirle-diagram bg-custom">
            <div className="border rounded-circle d-flex justify-content-center align-items-center w-75 h-75 bg-white">
              <span>10 000UAH</span>
            </div>
          </div>
        </div>

        <CircleDiagramList />
        <CircleDiagramList />
        <CircleDiagramList />
      </div>
      <button className="bg-transparent w-100 d-flex justify-content-center align-items-center">
        <ArrowsSVG id={"ArrowDown"} width={"1rem"} height={"2rem"} />
      </button>
    </div>
  );
};

export default CircleDiagram;
