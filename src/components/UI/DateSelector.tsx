import { addDays, format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DatesRangeActionType } from "../../store/reducers/types";
const RangeCalendar = () => {
  const dispatch = useDispatch();

  const date = new Date();
  const pastMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, date.getDate() - 1),
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")} - {format(range.to, "PPP")}
        </p>
      );
    }
  }
  const b = dispatch({
    type: DatesRangeActionType.SET_DATES_RANGE,
    payload: {
      ...range,
      from: range?.from?.getTime(),
      to: range?.to?.getTime() || range?.from?.getTime(),
    },
  });
  console.log(b);
  return (
    <DayPicker
      showOutsideDays
      ISOWeek
      mode="range"
      defaultMonth={pastMonth}
      selected={range}
      footer={footer}
      onSelect={setRange}
      className="border shadow p-3 m-0 rounded-5"
    />
  );
};
export default RangeCalendar;
