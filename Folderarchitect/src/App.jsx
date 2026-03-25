import React, { useState, useEffect } from "react";

function FolderArchitect() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Simulate fetching data
  useEffect(() => {
    setTimeout(() => {
      setData("This is your retrieved data.");
      setLoading(false);
    }, 2000); // simulate delay
  }, []);

  const handleCopy = async () => {
    if (loading || !data) {
      setMessage("Retrieving data. Wait a few seconds and try to copy again.");
      return;
    }

    try {
      await navigator.clipboard.writeText(data);
      setMessage("Copied successfully!");
    } catch (err) {
      setMessage("Copy failed. Try again.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Folder Architect</h2>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <p>{data}</p>
      )}

      <button onClick={handleCopy} disabled={loading}>
        Copy Data
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default FolderArchitect;