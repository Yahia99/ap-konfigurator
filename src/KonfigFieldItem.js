import React from "react";

function KonfigFieldItem({ items }) {
  return items.map((item) => {
    return (
      <div className="items" key={item.id}>
        <i className={`fa-solid fa-${item.iconName}`}></i>
      </div>
    );
  });
}
export default KonfigFieldItem;
