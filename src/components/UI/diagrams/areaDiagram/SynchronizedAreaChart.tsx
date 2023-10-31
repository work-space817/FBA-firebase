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
import { ITransactionList } from "../../../../store/reducers/types";
import TransactionList from "../../transactions/TransactionList";
import TransactionStatisticList from "../TransactionStatisticList";
import DateFormater from "../../../../helpers/DateFormater";

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
  const formattedTransactions = transactionList.map((transaction) => {
    const formattedDate = DateFormater(transaction.transactionDate);
    const transactionMonth = new Date(formattedDate).toLocaleString("en-US", {
      month: "short",
    });
    return { transactionMonth, transaction };
  });

  const mergedTransactions = formattedTransactions.reduce(
    (result: any, currentTransaction) => {
      const { transactionMonth, transaction } = currentTransaction;
      const transactionType = transaction.transactionType;

      result[transactionMonth] = result[transactionMonth] || {};
      result[transactionMonth][transactionType] = result[transactionMonth][
        transactionType
      ] || {
        summaryValue: 0,
        summaryCount: 0,
        transactions: [],
      };

      const typeEntry = result[transactionMonth][transactionType];
      typeEntry.summaryValue += transaction.transactionValue;
      typeEntry.summaryCount++;
      typeEntry.transactions.push(currentTransaction);

      return result;
    },
    {}
  );
  // console.log(mergedTransactions);
  const mergedData = months.map((monthName) => {
    const monthData = mergedTransactions[monthName] || {
      "Income transaction": {
        summaryValue: 0,
        summaryCount: 0,
        transactions: [],
      },
      "Outcome transaction": {
        summaryValue: 0,
        summaryCount: 0,
        transactions: [],
      },
    };

    return {
      month: monthName,
      income: monthData["Income transaction"]?.summaryValue || 0,
      outcome: monthData["Outcome transaction"]?.summaryValue || 0,
    };
  });

  // console.log(mergedData);

  return (
    <>
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
      <p>Maybe some other content</p>

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
