import { addDays, format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import React, { useState } from "react";
const RangeCalendar = () => {
  const date = new Date();
  const pastMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
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
      console.log(
        "from",
        range.from.getTime(),
        "<=",
        "dispatch 2444444444444444444",
        ">=",
        "to",
        range.to.getTime()
      );
      footer = (
        <p>
          {format(range.from, "PPP")} - {format(range.to, "PPP")}
        </p>
      );
    }
  }

  return (
    <DayPicker
      mode="range"
      defaultMonth={pastMonth}
      selected={range}
      footer={footer}
      onSelect={setRange}
      className="border shadow p-3 rounded-5 w-50"
    />
  );
};
export default RangeCalendar;
