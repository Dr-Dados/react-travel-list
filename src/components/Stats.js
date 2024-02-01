import React from "react";

const Stats = ({ items }) => {
  let numItems = items.length;
  let packedItems = items.filter((item) => item.packed == true).length;
  return (
    <footer className="stats">
      🧳 You have {numItems} items on your list, and you already packed{" "}
      {packedItems} (
      {numItems != 0 ? Math.round((packedItems / numItems) * 100) : 0} %)
    </footer>
  );
};

export default Stats;
