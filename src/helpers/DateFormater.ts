import parse from "date-fns/parse";

const DateFormater = (transactionDate: string) => {
  const dateInMilliseconds = parse(
    transactionDate,
    "dd.MM.yyyy",
    new Date()
  ).getTime();
  return dateInMilliseconds;
};

export default DateFormater;
