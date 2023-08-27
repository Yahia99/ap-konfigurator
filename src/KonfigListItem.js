import React from "react";

function KonfigListItem({ items, handleItems }) {
  return (
    <>
      {items.map((item) => {
        return (
          <li onClick={handleItems}>
            {item.itemName}
            <i className={`fa-solid fa-${item.iconName}`}></i>
          </li>
        );
      })}
    </>
  );
}
export default KonfigListItem;
