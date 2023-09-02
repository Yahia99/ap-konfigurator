import React from "react";
import data from "./data";
import KonfigField from "./KonfigField";
import KonfigFieldItem from "./KonfigFieldItem";
import KonfigList from "./KonfigList";
import KonfigListItem from "./KonfigListItem";
import { useState } from "react";

function KonfigApp() {
  const [items, setItems] = useState([]);
  const addItem = (itemId) => {
    const newItems = data.filter((item) => item.id === itemId);
    setItems([...items, ...newItems]);
  };
  const deleteItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems([...newItems]);
  };
  return (
    <main className="App">
      <h2 className="center">Arbeitsplatz Konfigurator</h2>
      <div className="container">
        <KonfigList>
          <KonfigListItem items={data} addItem={addItem} newItems={items} />
        </KonfigList>
        <KonfigField>
          <KonfigFieldItem items={items} deleteItem={deleteItem} />
        </KonfigField>
      </div>
    </main>
  );
}

export default KonfigApp;
