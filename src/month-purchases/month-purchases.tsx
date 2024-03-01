import React, { useEffect, useState } from "react";
import { EntryData } from "../EntryDataInterface";
import { PurchaseProps } from "../PurchasePropsInterface";
import "../user-dash/user-dash.css";
import "./month-purchases.css";

const MonthPurchases = ({ data, calcFunc }: PurchaseProps) => {
  const [pointsArr, setPointsArr] = useState<[string, EntryData[]][]>([]);

  useEffect(() => {
    setPointsArr(Object.entries(data));
  }, [data]);

  return (
    <>
      <div className="points-table-header">
        <span>Month</span>
        <span>Points</span>
      </div>
      {pointsArr.map(([month, point], index) => (
        <div className="points-row" key={index}>
          <span className="month-title">{month}</span>
          <span className="month-points">
            {point.reduce((acc, cur) => acc + calcFunc(cur.amount), 0)}
          </span>
        </div>
      ))}
    </>
  );
};

export default MonthPurchases;
