import React, { useEffect, useState } from "react";

const UserDash = ({ data }) => {
  const [purchaseTotal, setPurchaseTotal] = useState(0);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    data.forEach((transaction) => {
      const roundedAmount = Math.floor(transaction.amount);

      if (roundedAmount < 50) return;

      if (roundedAmount > 100) {
        const newPoints = (roundedAmount - 100) * 2 + 50;
        setPoints((prev) => prev + newPoints);
      } else if (roundedAmount > 50 && roundedAmount < 100) {
        const newPoints = roundedAmount - 50;
        setPoints((prev) => prev + newPoints);
      }

      setPurchaseTotal((prev) => prev + transaction.amount);
    });

    return;
  }, [data]);

  const CurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="user-dash">
      <h1>Purchased to date: {CurrencyFormat.format(purchaseTotal)}</h1>
      <h1>Total Points: {points}</h1>
    </div>
  );
};

export default UserDash;
