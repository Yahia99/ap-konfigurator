import React from "react";

function KonfigListItem({ items, addItem }) {
  return (
    <>
      {items.map((item) => {
        return (
          <li onClick={() => addItem(item.id)} key={item.id}>
            {item.itemName}
            <i className={`fa-solid fa-${item.iconName}`}></i>
          </li>
        );
      })}
    </>
  );
}
export default KonfigListItem;
