import React from "react";
import data from "./data";
import KonfigField from "./KonfigField";
import KonfigFieldItem from "./KonfigFieldItem";
import KonfigList from "./KonfigList";
import KonfigListItem from "./KonfigListItem";
import { useState } from "react";

function KonfigApp() {
  const [items, setItems] = useState([]);
  const handleItems = (e) => {
    e.stopPropagation();
    const item = e.currentTarget;
    setItems([...items, item]);
  };
  return (
    <main className="App">
      <h2 className="center">Arbeitsplatz Konfigurator</h2>
      <div className="container">
        <KonfigList>
          <KonfigListItem
            items={data}
            key={data.id}
            handleItems={handleItems}
          />
        </KonfigList>
        <KonfigField>
          <KonfigFieldItem item={items} data={data} />
        </KonfigField>
      </div>
    </main>
  );
}

export default KonfigApp;
