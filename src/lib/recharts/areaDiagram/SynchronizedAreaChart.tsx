import { FC, useState } from "react";
import { useSelector } from "react-redux";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import TransactionList from "../../../components/UI/transactions/TransactionList";
import DateFormater from "../../../helpers/DateFormater";
import {
  ITransactionList,
  IMonthAndYearRange,
} from "../../../store/reducers/types";
interface ISynchronizedAreaChart {
  circleColor: string;
  statisticData: any[];
}
const SynchronizedAreaChart: FC<ISynchronizedAreaChart> = ({
  circleColor,
  statisticData,
}) => {
  const fetchTransactionsData = TransactionList();
  const { transactionList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );
  const { selectedMonthAndYear } = useSelector(
    (store: any) => store.monthAndYearRange as IMonthAndYearRange
  );
  const getDaysInMonth = new Date(selectedMonthAndYear.year, 12, 0, 23, 59, 59);
  const rangeFrom = new Date(selectedMonthAndYear.year, 0, 1);
  const rangeTo = getDaysInMonth;
  const sortList = transactionList.filter(
    (transaction) =>
      rangeFrom.getTime() <= DateFormater(transaction.transactionDate) &&
      DateFormater(transaction.transactionDate) <= rangeTo.getTime()
  );
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const mergedTransactions = sortList.reduce(
    (result: any, currentTransaction) => {
      const formattedDate = DateFormater(currentTransaction.transactionDate);
      const transactionMonth = new Date(formattedDate).toLocaleString("en-US", {
        month: "short",
      });
      const transactionType = currentTransaction.transactionType;
      const transactionValue = currentTransaction.transactionValue;

      const monthIndex = result.findIndex(
        (item: any) => item.summaryMonth === transactionMonth
      );

      if (monthIndex === -1) {
        const newMonth = {
          summaryMonth: transactionMonth,
          summaryType: {
            [transactionType]: {
              summaryValue: transactionValue,
              summaryCount: 1,
              transactions: [currentTransaction],
            },
          },
        };
        result.push(newMonth);
      } else {
        const month = result[monthIndex];
        if (month.summaryType[transactionType]) {
          month.summaryType[transactionType].summaryValue += transactionValue;
          month.summaryType[transactionType].summaryCount++;
          month.summaryType[transactionType].transactions.push(
            currentTransaction
          );
        } else {
          month.summaryType[transactionType] = {
            summaryValue: transactionValue,
            summaryCount: 1,
            transactions: [currentTransaction],
          };
        }
      }

      return result;
    },
    []
  );

  const mergedData = months.map((month) => {
    const monthData = mergedTransactions.find(
      (item: any) => item.summaryMonth === month
    );

    const income = monthData
      ? monthData.summaryType["Income transaction"]?.summaryValue || 0
      : 0;

    const outcome = monthData
      ? monthData.summaryType["Outcome transaction"]?.summaryValue || 0
      : 0;

    return { month, income, outcome };
  });

  // console.log(mergedData);

  return (
    <>
      <h6 className="py-2">Incoming statistac per year</h6>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={mergedData}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={"income"}
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
      <h6 className="py-2">Outcoming statistac per year</h6>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={mergedData}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="outcome"
            stroke="#ed3737"
            fill="#ed3737"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default SynchronizedAreaChart;
