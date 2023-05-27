import React, { useState } from "react";

export default function ItemEntry() {
  const formStyles = {
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
  };
  const inputAndLabelStyles = {
    padding: "1rem",
    backgroundColor: "orange",
  };
  const inputLabelStyles = {
    padding: 0,
    margin: 0,
  };
  const buttonStyles = {
    backgroundColor: "green",
    color: "white",
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const item = {
      itemName,
      category: selectedCategory,
    };
  };

  const categories = ["clothes", "food", "other"];
  const [selectedCategory, setSelectedCategory] = useState("clothes");
  const [itemName, setItemName] = useState("");
  const [itemCondition, setItemCondition] = useState("");

  console.log(itemName);
  return (
    <div>
      Item Entry
      <form style={formStyles} onSubmit={submitHandler}>
        <div style={inputAndLabelStyles}>
          <h3 style={inputLabelStyles}>Item Name</h3>
          <input
            placeholder="item name"
            onChange={() => setItemName(event.target.value)}
            value={itemName}
          />
        </div>
        <div style={inputAndLabelStyles}>
          <h3 style={inputLabelStyles}>Category</h3>
          <select onChange={(event) => setSelectedCategory(event.target.value)}>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Inputs for clothes */}
        {selectedCategory === "clothes" && (
          <div style={{ display: "flex" }}>
            <div>
              <h3 style={inputLabelStyles}>Size:</h3>
              <select name="clothing size" id="size">
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
            </div>

            <div>
              <h3>Condition</h3>
              <select name="clothing condition" id="condition">
                <option>New</option>
                <option>Like New</option>
                <option>Used</option>
              </select>
            </div>
          </div>
        )}

        {/* Inputs for foods */}
        {selectedCategory === "food" && (
          <div style={{ display: "flex" }}>
            <h3 style={inputLabelStyles}>Expiration date:</h3>
            <input placeholder="MM/DD/YYYY" type="text" />
          </div>
        )}
        <h3 style={inputLabelStyles}>Description</h3>
        <textarea rows={"5"} placeholder="Describe the item..." />
        <button type="submit" style={buttonStyles}>
          submit
        </button>
      </form>
    </div>
  );
}
