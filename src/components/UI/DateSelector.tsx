import { addDays, format } from "date-fns";
import { Caption, DateRange, DayPicker } from "react-day-picker";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  DatesRangeActionType,
  MonthAndYearRangeActionType,
} from "../../store/reducers/types";
const DateSelector = () => {
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
    } else if (range?.to) {
      footer = (
        <p>
          {format(range.from, "PPP")} - {format(range.to, "PPP")}
        </p>
      );
    }
  }

  const handleMonthChange = (date: Date) => {
    dispatch({
      type: MonthAndYearRangeActionType.SET_MONTH_AND_YEAR,
      payload: { month: date.getMonth() + 1, year: date.getFullYear() },
    });
  };

  useEffect(() => {
    handleMonthChange(new Date());
  }, []);

  useEffect(() => {
    dispatch({
      type: DatesRangeActionType.SET_DATES_RANGE,
      payload: {
        ...range,
        from: range?.from?.getTime(),
        to: range?.to?.getTime() || range?.from?.getTime(),
      },
    });
  }, [range]);
  return (
    <DayPicker
      captionLayout="dropdown-buttons"
      fromYear={2015}
      toYear={2025}
      onMonthChange={handleMonthChange}
      showOutsideDays
      ISOWeek
      mode="range"
      defaultMonth={pastMonth}
      selected={range}
      footer={footer}
      onSelect={setRange}
      className="shadow p-3 m-0 rounded-5"
    />
  );
};
export default DateSelector;
