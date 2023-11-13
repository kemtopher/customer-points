import React, { useEffect, useState } from "react";
import "../user-dash/user-dash.css";

const UserDash = ({ data, loading }) => {
  const [points, setPoints] = useState(0);

  const CurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

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
  }, [data]);

  const userPurchaseTable = data?.map((transaction, index) => (
    <div className="transaction-table-row" key={index}>
      <span>{transaction.date}</span>
      <span>{CurrencyFormat.format(transaction.amount)}</span>
      <span>{calculatePoints(transaction.amount)}</span>
    </div>
  ));

  return (
    <div className="user-dash">
      {loading ? (
        <div className="spinner">
          <h1 className="loading-sign">loading data ...</h1>
          <div className="half-spinner"></div>
        </div>
      ) : (
        <div className="user-info">
          <h1>Purchases</h1>
          <div className="user-transactions">
            <div className="transaction-table-header">
              <span>Date</span>
              <span>Amount</span>
              <span>Points</span>
            </div>
            {userPurchaseTable}
          </div>
          <p>Total Points To Date: {points}</p>
        </div>
      )}
    </div>
  );
};

export default UserDash;
