import React, { useState } from "react";
import RangeCalendar from "../common/inputDate/RangeCalendar";
import ArrowsSVG from "../../helpers/selectorsSVG/UI/ArrowsSVG";

const DateSelector = () => {
  const [calendarVisible, setCalendarVisible] = useState(false);
  console.log(calendarVisible);
  const calendar = RangeCalendar();

  return (
    <>
      <button
        className="w-100 d-flex justify-content-center align-items-center gap-2 mb-3 bg-transparent border"
        onClick={() => setCalendarVisible(true)}
      >
        <ArrowsSVG id={"ArrowLeft"} width={"1rem"} height={"1rem"} />
        <span className="rounded-pill border p-1 px-2">
          01.09.2023 - 08.10.2023
        </span>
        <ArrowsSVG id={"ArrowRight"} width={"1rem"} height={"1rem"} />
      </button>
      {calendar}
    </>
  );
};

export default DateSelector;
