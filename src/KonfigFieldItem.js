import React from "react";

function KonfigFieldItem({ items, deleteItem }) {
  return items.map((item) => {
    return (
      <div className="items" key={item.id} onClick={() => deleteItem(item.id)}>
        <i className={`fa-solid fa-${item.iconName}`}></i>
      </div>
    );
  });
}
export default KonfigFieldItem;
