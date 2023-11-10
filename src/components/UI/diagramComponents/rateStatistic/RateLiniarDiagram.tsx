import React, { useEffect, useState } from "react";
import LineDiagram from "../../../../lib/recharts/lineDiagram/LineDiagram";
import getExchangeRate from "../../../../api/CurrenyBeacon/getExchangeRate";

const RateLiniarDiagram = () => {
  const [rateUSD, setRateUSD] = useState<any[]>([]);
  const [rateEUR, setRateEUR] = useState<any[]>([]);
  const now = new Date();

  const day = now.getDate().toString().padStart(2, "0");
  const month = (number: number = 0) =>
    (now.getMonth() + number).toString().padStart(2, "0");
  const year = now.getFullYear();

  const rangeFrom = `${year}-${month()}-${day}`;
  const rangeTo = `${year}-${month(1)}-${day}`;

  const getData = async () => {
    const USD = await getExchangeRate("USD", rangeFrom, rangeTo);
    console.log("USD: ", USD);
    setRateUSD(USD);
    const EUR = await getExchangeRate("EUR", rangeFrom, rangeTo);
    setRateEUR(EUR);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h4 className="ms-3 mb-3">Currency Rate Diagram</h4>
      <div className="d-flex flex-column gap-3">
        <p className="m-0 ms-2">UAH & USD</p>
        <LineDiagram statisticData={rateUSD} />
        <p className="m-0 ms-2">UAH & EUR</p>
        <LineDiagram statisticData={rateEUR} />
      </div>
    </>
  );
};

export default RateLiniarDiagram;
