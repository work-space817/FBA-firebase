import { Modal } from "bootstrap";
import ModalWindow from "../common/modal/ModalWindow";
import GoalAdd from "./goals/GoalAdd";

const OperationMenu = () => {
  return (
    <div className="d-flex align-items-center justify-content-around gap-5  mb-3">
      <div className="d-flex gap-3 align-items-center">
        <h4 className="m-0">Goals</h4>
        <ModalWindow title={"New income"} buttonText={"New"}>
          <GoalAdd />
        </ModalWindow>
      </div>
      <div className="d-flex gap-3">
        <ModalWindow title={"New income"} buttonText={"Add  income"}>
          <GoalAdd />
        </ModalWindow>
        <ModalWindow title={"New income"} buttonText={"Add  outcome"}>
          <GoalAdd />
        </ModalWindow>
      </div>
    </div>
  );
};

export default OperationMenu;
