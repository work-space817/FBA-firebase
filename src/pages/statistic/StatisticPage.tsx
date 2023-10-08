import CircleDiagram from "../../components/UI/diagrams/circleDiagram/CircleDiagram";
import ArrowsSVG from "../../helpers/selectorsSVG/UI/ArrowsSVG";

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
      <div className="d-flex gap-3">
        <CircleDiagram />
        <div className="rounded-5 shadow col-9">
          <div className="p-3">
            <div className=""></div>
            <div className="border p-2 d-flex">
              {datesLoop().map((date) => (
                <div className="px-1 border-top d-flex flex-column align-items-center">
                  <span className="m-0 p-0 h-100">|</span>
                  {date}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
