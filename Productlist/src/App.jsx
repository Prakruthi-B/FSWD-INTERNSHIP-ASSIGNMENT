import React, { useState } from "react";

export default function App() {
  const products = [
    { id: 1, name: "T-Shirt", category: "Clothing", price: 500 },
    { id: 2, name: "Laptop", category: "Electronics", price: 50000 },
    { id: 3, name: "Shoes", category: "Footwear", price: 1500 }
  ];

  const [category, setCategory] = useState("All");

  const filtered = products.filter(
    (p) => category === "All" || p.category === category
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Mini Shop</h2>

      {/* Filter */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option>All</option>
        <option>Clothing</option>
        <option>Electronics</option>
        <option>Footwear</option>
      </select>

      {/* Products */}
      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        {filtered.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: 10 }}>
            <h4>{p.name}</h4>
            <p>{p.category}</p>
            <p>₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}