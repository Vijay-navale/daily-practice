import React, { useState } from "react";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => {
  return {
    value: n,
    id: `id${n}`,
  };
});
const ListAndKeys = () => {
  const [numbers, setNumbers] = useState(data);

  const deleteItem = (id) => {
    const filteredData = numbers.filter((n) => n.id !== id);
    setNumbers(filteredData);
  };

  const renderItem = (n, index) => (
    <h1 key={n.id} onClick={() => deleteItem(n.id)}>
      {n.value}
    </h1>
  );

  return <div>{numbers.map(renderItem)}</div>;
};

export default ListAndKeys;
