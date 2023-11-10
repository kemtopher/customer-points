import React, { useEffect, useState } from "react";
import UserDash from "./user-dash/user-dash";
import "../src/app.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getTransactions(url) {
    try {
      setLoading(true);
      const res = await fetch(url);
      if (!res.ok) {
        setError(true);
      }
      const data = await res.json();
      return data;
    } catch (err) {
      setError(true);
    }
  }

  useEffect(() => {
    getTransactions("http://localhost:4000/transactions")
      .then((res) => {
        setTransactions(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  return (
    <div className="App">
      <div className="app-stage">
        <div className="dash-wrapper">
          {loading ? (
            <h1>loading data ...</h1>
          ) : (
            <UserDash data={transactions} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
