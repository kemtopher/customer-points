import React, { useEffect, useState } from "react";
import UserDash from "./user-dash/user-dash";
import "../src/app.css";

const App = () => {
  const [transactions, setTransactions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getTransactions(url) {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        setError(true);
      }

      let data = await res.json();
      setTransactions(data);
      setLoading(false);
    } catch (err) {
      setTransactions(null);
      setError(err.message);
    }
  }

  useEffect(() => {
    getTransactions("http://localhost:4000/transactions");
  }, []);

  return (
    <div className="App">
      <div className="app-stage">
        <div className="dash-wrapper">
          {error ? (
            <div className="error-block">
              <h2 className="error-state">Oops, something went wrong!</h2>
              <p className="error-state">Please try refreshing the page.</p>
            </div>
          ) : (
            <UserDash data={transactions} error={error} loading={loading} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
