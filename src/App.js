import React, { useEffect, useState } from "react";
import UserDash from "./user-dash/user-dash";
import "../src/app.css";

const App = () => {
  const [transactions, setTransactions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function toggleErrorState() {
    if (loading) return;
    setError((prevState) => !prevState);
  }

  function toggleLoadingState() {
    if (error) return;
    setLoading((prevState) => !prevState);
  }

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
          <div className="button-row">
            <button
              className={`error-button ${error ? "refresh-style" : ""}`}
              onClick={toggleErrorState}
              disabled={loading}
            >
              {error || loading ? "Refresh Page" : "Simulate Error"}
            </button>
            <button
              className={`loading-button ${error ? "refresh-style" : ""}`}
              onClick={toggleLoadingState}
              disabled={error}
            >
              {loading || error ? "Refresh Page" : "Simulate Loading"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
