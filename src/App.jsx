import React, { useState, useEffect } from "react";
import ItemList from "./components/ItemList";

const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]); 
  const [error, setError] = useState(""); 

  
  useEffect(() => {
    fetch(API_URI)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch items");
        return response.json();
      })
      .then((data) => setItems(data))
      .catch((err) => {
        console.error(err);
        setError("Failed to load items.");
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`${API_URI}/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to delete item");
        
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to delete item.");
      });
  };

  return (
    <div>
      <h1>Item List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {items.length ? (
        <ItemList items={items} handleDelete={handleDelete} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
