import React, { useEffect, useState } from "react";
import UserDash from "./user-dash/user-dash";
import "../src/app.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("/.netlify/functions/api")
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Network responded with: ${res.status}`);
          }

          return res.json();
        })
        .then((data) => {
          setTransactions(data.transactions);
        })
        .catch((err) => {
          setError(err.message);
          setTransactions(null);
        })
        .finally(() => setLoading(false));
    }, 3000);
  }, []);

  return (
    <div className="App">
      <div className="app-stage">
        <div className="dash-wrapper">
          {error ? (
            <div className="error-block">
              <h2 className="error-state">Oops, something went wrong!</h2>
              <p className="error-state">Error: {error}</p>
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
