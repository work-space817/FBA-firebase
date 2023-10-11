import React, { FC, PureComponent, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import TransactionList from "../../transactions/TransactionList";
import { useSelector } from "react-redux";
import { ITransactionList } from "../../../../store/reducers/types";
import { ITransaction } from "../../transactions/types";
import Transaction from "../../transactions/Transaction";

interface Iloh {
  id: string;
}

const CircleDiagramUI = () => {
  const fetchTransactionsData = TransactionList();
  const { transactionList } = useSelector(
    (store: any) => store.transactionList as ITransactionList
  );
  const sumOfTransaction = () => {
    // const getTransactionInfo = transactionList.map((transaction, index) => ({
    //   transactionCategory: transaction.selectedCategories,
    //   transactionValue: transaction.transactionValue,
    //   count: transaction,
    // }));
    // const sum = getTransactionInfo.reduce(
    //   (accumulator, currentValue) => accumulator + currentValue,
    //   0
    // );
    // console.log(sum);
    // console.log(getTransactionInfo);
    // return sum;
  };
  const getTransactionInfo = transactionList
    .map((transaction) => transaction)
    .filter(
      (transaction) => transaction.transactionType === "Outcome transaction"
    );
  console.log(getTransactionInfo);
  sumOfTransaction();

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#00BB28",
    "#FF8042",
    "#fee942",
    "#FF0e42",
    "#36de22",
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <ResponsiveContainer width="100%" height={175} className="">
      <PieChart width={400} height={400}>
        <Pie
          data={getTransactionInfo}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="transactionValue"
        >
          {getTransactionInfo.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CircleDiagramUI;
