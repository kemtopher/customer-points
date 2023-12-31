import React, { useEffect, useState } from "react";
import "../user-dash/user-dash.css";
import "./month-purchases.css";

const MonthPurchases = ({ data, calcFunc }) => {
  const [pointsArr, setPointsArr] = useState([]);

  useEffect(() => {
    setPointsArr(Object.entries(data));
  }, [data]);

  return (
    <>
      <div className="points-table-header">
        <span>Month</span>
        <span>Points</span>
      </div>
      {pointsArr.map((entry, index) => (
        <div className="points-row" key={index}>
          <span className="month-title">{entry[0]}</span>
          <span className="month-points">
            {entry[1].reduce((acc, cur) => acc + calcFunc(cur.amount), 0)}
          </span>
        </div>
      ))}
    </>
  );
};

export default MonthPurchases;
