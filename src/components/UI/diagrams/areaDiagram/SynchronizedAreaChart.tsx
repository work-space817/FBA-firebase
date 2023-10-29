import { FC } from "react";
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

interface ISynchronizedAreaChart {
  circleColor: string;
  statisticData: any[];
}
const SynchronizedAreaChart: FC<ISynchronizedAreaChart> = ({
  circleColor,
  statisticData,
}) => {
  console.log(statisticData, "in SynchronizedAreaChart");
  const fetchTransactionsData = TransactionList();
  // const { transactionList } = useSelector(
  //   (store: any) => store.transactionList as ITransactionList
  // );

  const transactionList = TransactionStatisticList()
    .filter((transaction) => transaction.summaryType === "Outcome transaction")
    .map((transaction) => {
      console.log(transaction);
    });
  console.log(transactionList);
  const data = [
    {
      name: "Січень",
      incoming: 4000,
      outcoming: 2400,
    },
    {
      name: "Лютий",
      // info: {
      //   total: 3000,
      //   categories: 3000,
      // },

      incoming: 3000,
      outcoming: 1398,
    },
    {
      name: "Березень",
      incoming: 2000,
      outcoming: 9800,
    },
    {
      name: "Квітень",
      incoming: 2780,
      outcoming: 3908,
    },
    {
      name: "Травень",
      incoming: 1890,
      outcoming: 4800,
    },
    {
      name: "Червень",
      incoming: 2390,
      outcoming: 3800,
    },
    {
      name: "Липень",
      incoming: 3490,
      outcoming: 4300,
    },
    {
      name: "Серпень",
      incoming: 3000,
      outcoming: 1398,
    },
    {
      name: "Вересень",
      incoming: 2000,
      outcoming: 9800,
    },
    {
      name: "Жовтень",
      incoming: 2780,
      outcoming: 3908,
    },
    {
      name: "Листопад",
      incoming: 1890,
      outcoming: 4800,
    },
    {
      name: "Грудень",
      incoming: 2390,
      outcoming: 3800,
    },
  ];

  return (
    <>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="incoming"
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
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="outcoming"
            stroke="#ed3737"
            fill="#ed3737"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default SynchronizedAreaChart;
