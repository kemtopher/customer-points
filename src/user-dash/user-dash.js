import React, { useEffect, useState } from "react";

const UserDash = ({ data }) => {
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    data.forEach((transaction) => {
      const floorAmount = Math.floor(transaction.amount);

      if (floorAmount < 50) return;

      if (floorAmount > 100) {
        const newPoints = (floorAmount - 100) * 2 + 50;
        setPoints((prev) => prev + newPoints);
      } else if (floorAmount > 50 && floorAmount < 100) {
        const newPoints = floorAmount - 50;
        setPoints((prev) => prev + newPoints);
      }

      setPurchaseAmount((prev) => prev + transaction.amount);
    });

    return;
  }, [data]);

  const CurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="user-dash">
      <h1>Purchased to date: {CurrencyFormat.format(purchaseAmount)}</h1>
      <h1>Total Points: {points}</h1>
    </div>
  );
};

export default UserDash;
