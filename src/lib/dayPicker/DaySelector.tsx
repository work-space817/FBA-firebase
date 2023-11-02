import React, { useState } from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

export default function DaySelector() {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(today);
  console.log("selectedDay: ", selectedDay);

  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, "PPP")}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  return (
    <DayPicker
      mode="single"
      required
      selected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer}
    />
  );
}
