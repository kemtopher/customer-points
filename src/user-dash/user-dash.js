import React, { useEffect, useState } from "react";
import "../user-dash/user-dash.css";

const UserDash = ({ data, error }) => {
  const [purchaseTotal, setPurchaseTotal] = useState(0);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    data?.forEach((transaction, index) => {
      const roundedAmount = Math.floor(transaction.amount);

      if (roundedAmount < 50) {
        return;
      } else if (roundedAmount >= 100) {
        const newPoints = (roundedAmount - 100) * 2 + 50;
        setPoints((prev) => prev + newPoints);
      } else if (roundedAmount > 50 && roundedAmount < 100) {
        const newPoints = roundedAmount - 50;
        setPoints((prev) => prev + newPoints);
      }

      setPurchaseTotal((prev) => prev + transaction.amount);
    });
  }, [data]);

  const CurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const userPurchaseTable = data?.map((transaction, index) => (
    <div className="transaction-table-row" key={index}>
      <span>{transaction.id}</span>
      <span>{CurrencyFormat.format(transaction.amount)}</span>
      <span>
        <div
          className={
            transaction.status === true
              ? "approved-transaction"
              : "pending-transaction"
          }
        ></div>
      </span>
    </div>
  ));

  return (
    <div className="user-dash">
      {error ? (
        <div className="error-block">
          <h1 className="error-state">Oops, something went wrong!</h1>
          <p className="error-state">Please try refreshing the page.</p>
        </div>
      ) : (
        <div className="user-info">
          <h4>Purchased to date: {CurrencyFormat.format(purchaseTotal)}</h4>
          <h4>Total Points to date: {points}</h4>
          <div className="user-transactions">
            <div className="transaction-table-header">
              <span>ID</span>
              <span>Amount</span>
              <span>Status</span>
            </div>
            {userPurchaseTable}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDash;
