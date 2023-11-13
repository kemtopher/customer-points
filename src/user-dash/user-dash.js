import React, { useEffect, useState } from "react";
import MonthPurchases from "../month-purchases/month-purchases";
import TotalPurchases from "../total-purchases/total-purchases";
import "../user-dash/user-dash.css";

const UserDash = ({ data, loading, view }) => {
  const [points, setPoints] = useState(0);
  const [entryGroups, setEntryGroups] = useState([]);

  function calculatePoints(amt) {
    const adjustedAmt = Math.floor(amt);

    if (adjustedAmt > 100) {
      return (adjustedAmt - 100) * 2 + 50;
    } else if (adjustedAmt > 50 && adjustedAmt <= 100) {
      return adjustedAmt - 50;
    } else {
      return 0;
    }
  }

  useEffect(() => {
    const accumulatedPoints = data?.reduce(
      (acc, cur) => acc + calculatePoints(cur.amount),
      0
    );
    setPoints(accumulatedPoints);

    const groupedByMonthYear = data?.reduce((acc, cur) => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const parsed = new Date(cur.date);
      const year = parsed.getFullYear();
      const month = parsed.getMonth();
      const groupKey = `${months[month]},${year}`;

      acc[groupKey] = acc[groupKey] || [];
      acc[groupKey].push(cur);

      return acc;
    }, {});
    setEntryGroups(groupedByMonthYear);
  }, [data]);

  return (
    <div className="user-dash">
      {loading ? (
        <div className="spinner">
          <h1 className="loading-sign">loading data ...</h1>
          <div className="half-spinner"></div>
        </div>
      ) : (
        <div className="user-info">
          <h1>Purchase Summary</h1>
          <div className="user-transactions">
            {view === "purchases" ? (
              <TotalPurchases data={data} calcFunc={calculatePoints} />
            ) : (
              <MonthPurchases data={entryGroups} calcFunc={calculatePoints} />
            )}
          </div>
          <h3>Total Points: {points}</h3>
        </div>
      )}
    </div>
  );
};

export default UserDash;
