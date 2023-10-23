import ArrowsSVG from "../../helpers/selectorsSVG/UI/ArrowsSVG";
import LineDiagram from "../../components/UI/diagrams/lineDiagram/LineDiagram";
import AreaDiagram from "../../components/UI/diagrams/areaDiagram/AreaDiagram";
import BrushBarDiagram from "../../components/UI/diagrams/brushBarDiagram/BrushBarDiagram";
import CircleDiagram from "../../components/UI/diagrams/circleDiagram/CircleDiagramUI";
import RadarDiagram from "../../components/UI/diagrams/radarDiagram/RadarDiagram";
import CircleDiagramUI from "../../components/UI/diagrams/circleDiagram/CircleDiagramUI";
import CircleDiagramComponent from "../../components/UI/diagrams/circleDiagram/CircleDiagramComponent";
import DateSelector from "../../components/UI/DateSelector";
import DefaultSelect from "../../components/common/select/DefaultSelect";

const StatisticPage = () => {
  return (
    <>
      <div className="mb-5">
        <div className="d-flex gap-5 flex-column-lg align-items-center">
          <div className="">
            <DateSelector />
          </div>
          <div className="rounded-5 shadow col-12 col-lg-4">
            <div className="p-3 pb-0">
              <h4 className="ms-2 mb-3">Circle Diagram</h4>
              <RadarDiagram />
            </div>
          </div>
        </div>
      </div>

      {/* <LineDiagram /> */}
      {/* <AreaDiagram />
          <BrushBarDiagram />
          <RadarDiagram /> */}
      <div className="d-flex mb-5 col">
        <div className="rounded-5 shadow col">
          <div className="p-3">
            <h4 className="ms-3 mb-3">Area Diagram</h4>
            <AreaDiagram />
          </div>
        </div>
      </div>
      <div className="rounded-5 shadow mb-5">
        <div className="py-3 px-2">
          <h4 className="ms-3 mb-3">Circle Diagram</h4>
          <BrushBarDiagram />
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
