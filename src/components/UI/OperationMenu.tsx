import { Modal } from "bootstrap";
import ModalWindow from "../modal/ModalWindow";
import NewGoalOperation from "../operations/NewGoalOperation";

const OperationMenu = () => {
  return (
    <div className="d-flex align-items-center justify-content-around gap-5  mb-3">
      <div className="d-flex gap-3 align-items-center">
        <h4 className="m-0">Goals</h4>
        <ModalWindow title={"New income"} buttonText={"New"}>
          <NewGoalOperation />
        </ModalWindow>
      </div>
      <div className="d-flex gap-3">
        <ModalWindow title={"New income"} buttonText={"Add  income"}>
          <NewGoalOperation />
        </ModalWindow>
        <ModalWindow title={"New income"} buttonText={"Add  outcome"}>
          <NewGoalOperation />
        </ModalWindow>
      </div>
    </div>
  );
};

export default OperationMenu;
