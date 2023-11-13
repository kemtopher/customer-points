import React, { useEffect, useState } from "react";
import MonthPurchases from "../month-purchases/month-purchases";
import TotalPurchases from "../total-purchases/total-purchases";
import "../user-dash/user-dash.css";

const UserDash = ({ data, loading }) => {
  const [points, setPoints] = useState(0);
  const [entryGroups, setEntryGroups] = useState([]);
  const [view, setView] = useState("purchases");

  function togglePurchasesView() {
    if (view === "purchases") return;
    setView("purchases");
  }

  function toggleMonthlyView() {
    if (view === "points") return;
    setView("points");
  }

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
          <div className="user-header">
            <h1>
              {view === "points" ? "Purchase Points" : "Purchase Summary"}
            </h1>
          </div>
          <div className="user-transactions">
            {view === "purchases" ? (
              <TotalPurchases data={data} calcFunc={calculatePoints} />
            ) : (
              <MonthPurchases data={entryGroups} calcFunc={calculatePoints} />
            )}
          </div>
          <div className="user-actions">
            <h3 className="points-total">Total Points: {points}</h3>
            <div className="button-row">
              <button
                className="purchases-button"
                onClick={togglePurchasesView}
                disabled={view === "purchases"}
              >
                View Purchases
              </button>
              <button
                className="points-button"
                onClick={toggleMonthlyView}
                disabled={view === "points"}
              >
                View Points
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDash;
