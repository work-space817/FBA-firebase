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
import { ITransactionList } from "../../../../store/reducers/types";
import TransactionList from "../../transactions/TransactionList";
import { ISummary } from "../../diagramComponents/transactionStatistic/types";
import { parse } from "date-fns";
const BrushBarDiagram = () => {
  const data = [
    { name: "1", uv: 300, pv: 456 },
    { name: "2", uv: -145, pv: 230 },
    { name: "3", uv: -100, pv: 345 },
    { name: "4", uv: -8, pv: 450 },
    { name: "5", uv: 100, pv: 321 },
    { name: "6", uv: 9, pv: 235 },
    { name: "7", uv: 53, pv: 267 },
    { name: "8", uv: 252, pv: -378 },
    { name: "9", uv: 79, pv: -210 },
    { name: "10", uv: 294, pv: -23 },
    { name: "11", uv: 294, pv: -23 },
    { name: "12", uv: 43, pv: 45 },
    { name: "13", uv: -74, pv: 90 },
    { name: "14", uv: -71, pv: 130 },
    { name: "15", uv: -117, pv: 11 },
    { name: "16", uv: -186, pv: 107 },
    { name: "17", uv: -16, pv: 926 },
    { name: "18", uv: -125, pv: 653 },
    { name: "19", uv: 222, pv: 366 },
    { name: "20", uv: 372, pv: 486 },
    { name: "21", uv: 182, pv: 512 },
    { name: "22", uv: 164, pv: 302 },
    { name: "23", uv: 316, pv: 425 },
    { name: "24", uv: 131, pv: 467 },
    { name: "25", uv: 291, pv: -190 },
    { name: "26", uv: -47, pv: 194 },
    { name: "27", uv: -415, pv: 371 },
    { name: "28", uv: -182, pv: 376 },
    { name: "29", uv: -93, pv: 295 },
    { name: "30", uv: -99, pv: 322 },
    { name: "31", uv: -52, pv: 246 },
  ];
  const fetchTransactionsData = TransactionList();
  const { transactionList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );

  const formattedTransactions = transactionList.map((transaction) => {
    const formattedDate = DateFormater(transaction.transactionDate);
    const transactionDay = new Date(formattedDate).getDate();
    return { transactionDay, transaction };
  });

  const mergedTransactions = transactionList.reduce(
    (result: any[], currentTransaction) => {
      const { transactionType, transactionDate, transactionValue } =
        currentTransaction;
      const dateInMilliseconds = parse(
        transactionDate,
        "dd.MM.yyyy",
        new Date()
      ).getTime();
      const date = new Date(dateInMilliseconds).getDate();
      const dateIndex = result.findIndex(
        (item) => item.summaryDate === dateInMilliseconds
      );

      if (dateIndex === -1) {
        result.push({
          summaryDate: dateInMilliseconds,
          summaryType: {
            [transactionType]: {
              summaryCount: 1,
              summaryValue: transactionValue,
              transactions: [currentTransaction],
            },
          },
        });
      } else {
        // Дата існує в `result`, оновіть інформацію
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

  const b = (type: string) => {
    const a = type === "in" ? "pv" : "uv";
    return a;
  };

  return (
    <ResponsiveContainer width="100%" height={400} className="">
      <BarChart
        data={data}
        margin={{
          left: -20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <ReferenceLine y={0} stroke="#000" />
        <Brush
          dataKey="name"
          height={30}
          stroke="#8884d8"
          travellerWidth={15}
        />
        <Bar dataKey={b("in")} fill="#8884d8" />
        <Bar dataKey={b("")} fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BrushBarDiagram;
