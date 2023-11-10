import React, { useEffect, useState } from "react";
import UserDash from "./user-dash/user-dash";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  async function getTransactions(url) {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  }

  useEffect(() => {
    getTransactions("http://localhost:4000/transactions").then((res) =>
      setTransactions(res)
    );
  }, []);

  return (
    <div className="App">
      <UserDash data={transactions} />
    </div>
  );
};

export default App;
