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
  if (item.name === "Monitor") {
    const monitor = arr.includes();
  }
  return arr.includes(item);
}
export default KonfigListItem;
