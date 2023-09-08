import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";
import ModalWindow from "../../common/modal/ModalWindow";
import TransactionAdd from "./TransactionAdd";

const TransactionEmpty = () => {
  return (
    <>
      <tr>
        <td colSpan={100} className="text-center">
          No one transaction was created
        </td>
      </tr>
    </>
  );
};

export default TransactionEmpty;
