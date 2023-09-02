import React from "react";

function KonfigListItem({ items, addItem, newItems }) {
  return (
    <>
      {items.map((item) => {
        return (
          <button
            onClick={() => addItem(item.id)}
            key={item.id}
            disabled={checkArr(newItems, item)}
          >
            {item.itemName}
            <i className={`fa-solid fa-${item.iconName}`}></i>
          </button>
        );
      })}
    </>
  );
}
function checkArr(arr, item) {
  const itemName = item.itemName;
  if (itemName === "Monitor") {
    if (arr.filter((x) => x === item).length === 2) {
      return true;
    }
  }
  if (itemName === "Laptop") {
    console.log(true);
    if (arr.filter((x) => x.itemName === "Desktop PC").length === 1) {
      return true;
    } else {
      return arr.includes(item);
    }
  }
  if (itemName === "Desktop PC") {
    console.log(true);
    if (arr.filter((x) => x.itemName === "Laptop").length === 1) {
      return true;
    } else {
      return arr.includes(item);
    }
  }
}
export default KonfigListItem;
