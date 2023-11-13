import React from "react";
import "../user-dash/user-dash.css";

const TotalPurchases = ({ data, calcFunc }) => {
  const CurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <div className="transaction-table-header">
        <span>Date</span>
        <span>Amount</span>
        <span>Points</span>
      </div>
      <div className="transaction-table-body">
        {data.map((transaction, index) => (
          <div className="transaction-table-row" key={index}>
            <span>{transaction.date}</span>
            <span>{CurrencyFormat.format(transaction.amount)}</span>
            <span>{calcFunc(transaction.amount)}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default TotalPurchases;
