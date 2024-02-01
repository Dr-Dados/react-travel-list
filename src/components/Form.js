import React, { useState } from "react";

const Form = ({ onAddItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  };
  const inputHandler = (e) => {
    setDescription(e.target.value);
  };

  const changeHandler = (e) => {
    setQuantity(+e.target.value);
  };
  return (
    <form className="add-form" onSubmit={submitHandler}>
      <h3>What do you need for your 😍 trip ? </h3>
      <select
        value={quantity}
        name="count"
        id="count-select"
        onChange={changeHandler}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" value={description} onChange={inputHandler} />
      <button>ADD</button>
    </form>
  );
};

export default Form;
