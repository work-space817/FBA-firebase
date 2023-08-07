import React, { ChangeEvent, useState } from "react";
import InputComponent from "../../common/input/Input";
import { IGoalOperation } from "../../operations/types";

const GoalEdit: React.FC = () => {
  const init: IGoalOperation = {
    title: "",
    cost: "",
    expireDate: "",
  };
  const [data, setData] = useState<IGoalOperation>(init);

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    try {
      console.log("Нова ціль успішно створена.");
    } catch (err: any) {
      console.log("Bad request", err);
    }
  };
  return (
    <>
      <div
        className="col-6 d-flex rounded-5 shadow"
        // style={{ width: "10rem" }}
      >
        <div className="">
          <form onSubmit={onSubmitHandler} className="col p-3">
            <InputComponent
              label="Change title"
              field="title"
              value={data.title}
              onChange={onChangeHandler}
              // errors={error?.title}
              // error={errors.title}
              // touched={touched.title}
            />
            <InputComponent
              label="Change cost"
              field="cost"
              value={data.cost}
              onChange={onChangeHandler}
              // errors={error?.cost}
              // error={errors.cost}
              // touched={touched.cost}
            />
            <InputComponent
              label="Change expire date"
              field="expireDate"
              value={data.expireDate}
              onChange={onChangeHandler}
              // errors={error?.expireDate}
              // error={errors.expireDate}
              // touched={touched.expireDate}
            />

            <button type="submit" className="btn btn-primary">
              Update goal
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default GoalEdit;
