import React, { useEffect, useState } from "react";
import { EntryData } from "./EntryDataInterface";
import UserDash from "./user-dash/user-dash";
import "../src/app.css";

const App = () => {
  const [transactions, setTransactions] = useState<{[key: string]: EntryData[]} | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // force buffer time
    setTimeout(() => {
      fetch("http://localhost:4000/transactions")
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Network responded with: ${res.status}`);
          }

          return res.json();
        })
        .then((data: {[key: string]: EntryData[]}) => {
          setTransactions(data);
        })
        .catch((err: Error) => {
          setError(err.message);
          setTransactions([]);
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
            <UserDash data={transactions} loading={loading} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
