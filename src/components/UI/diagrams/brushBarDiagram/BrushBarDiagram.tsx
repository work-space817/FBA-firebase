import React, { PureComponent } from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DateFormater from "../../../../helpers/DateFormater";
import {
  IMonthAndYearRange,
  ITransactionList,
} from "../../../../store/reducers/types";
import TransactionList from "../../transactions/TransactionList";

const BrushBarDiagram = () => {
  const fetchTransactionsData = TransactionList();
  const { transactionList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );
  const { selectedMonthAndYear } = useSelector(
    (store: any) => store.monthAndYearRange as IMonthAndYearRange
  );
  const getDaysInMonth = new Date(
    selectedMonthAndYear.year,
    selectedMonthAndYear.month,
    0
  );
  console.log("getDaysInMonth: ", getDaysInMonth);

  //!  //!  //!  //!  //!  //!  //!  //!  //!  //!
  const sortList = transactionList.filter(
    (transaction) =>
      new Date(
        selectedMonthAndYear.year,
        selectedMonthAndYear.month - 1,
        0
      ).getTime() <= DateFormater(transaction.transactionDate) &&
      DateFormater(transaction.transactionDate) <=
        new Date(
          selectedMonthAndYear.year,
          selectedMonthAndYear.month,
          0
        ).getTime()
  );
  console.log(sortList);
  //!  //!  //!  //!  //!  //!  //!  //!  //!  //!  //!
  const mergedTransactions = sortList.reduce(
    (result: any[], currentTransaction) => {
      const { transactionType, transactionDate, transactionValue } =
        currentTransaction;
      const date = new Date(DateFormater(transactionDate)).getDate();
      const dateIndex = result.findIndex((item) => item.summaryDate === date);

      if (dateIndex === -1) {
        result.push({
          summaryDate: date,
          summaryType: {
            [transactionType]: {
              summaryCount: 1,
              summaryValue: transactionValue,
              transactions: [currentTransaction],
            },
          },
        });
      } else {
        if (!result[dateIndex].summaryType[transactionType]) {
          result[dateIndex].summaryType[transactionType] = {
            summaryCount: 1,
            summaryValue: transactionValue,
            transactions: [currentTransaction],
          };
        } else {
          result[dateIndex].summaryType[transactionType].summaryCount++;
          result[dateIndex].summaryType[transactionType].summaryValue +=
            transactionValue;
          result[dateIndex].summaryType[transactionType].transactions.push(
            currentTransaction
          );
        }
      }

      return result;
    },
    []
  );
  console.log(mergedTransactions);
  const mergedData = mergedTransactions.map((date) => {
    return {
      day: date.summaryDate,
      income: date.summaryType["Income transaction"]?.summaryValue || 0,
      outcome: date.summaryType["Outcome transaction"]?.summaryValue || 0,
    };
  });

  for (let i = 1; i <= getDaysInMonth.getDate(); i++) {
    const existingData = mergedData.find((docs) => docs.day == i);
    if (!existingData) {
      mergedData.push({
        day: i,
        income: 0,
        outcome: 0,
      });
    }
  }
  const statisticData = mergedData.sort((a, b) => a.day - b.day);

  return (
    <ResponsiveContainer width="100%" height={400} className="">
      <BarChart
        data={statisticData}
        margin={{
          left: -20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="day" height={30} stroke="#8884d8" travellerWidth={15} />
        <Bar dataKey={"income"} fill="#82ca9d" />
        <Bar dataKey={"outcome"} fill="#ed3737" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BrushBarDiagram;
