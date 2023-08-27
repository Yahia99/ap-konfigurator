import React from "react";

function KonfigFieldItem(props) {
  const { data, ...items } = props;
  const { item } = items;
  console.log(...data);
  // const img = data.img
  if (items !== []) {
    return item.map((x) => {
      return (
        <>
          <div>{x.innerText}</div>
        </>
      );
    });
  } else {
    return (
      <>
        <div>Please select an Item</div>
      </>
    );
  }
}
export default KonfigFieldItem;
