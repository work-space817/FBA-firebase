import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";
import ModalWindow from "../../common/modal/ModalWindow";
import GoalAdd from "./GoalAdd";

const GoalEmpty = () => {
  return (
    <>
      <div className="col-3 goal-item d-flex flex-column align-items-center justify-content-evenly rounded-5 shadow">
        <div className="p-3">
          {/* <ModalWindow title={"New Goal"} customActive={<GoalSVG id="Empty" />}>
            <GoalAdd />
          </ModalWindow> */}
        </div>
        <div className="p-3 d-flex flex-column">
          <span>Add new goal</span>
        </div>
      </div>
    </>
  );
};

export default GoalEmpty;
