import React, { useState } from "react";
import "../css/TodoList.css";

function TodoList() {
  const [currentInput, setCurrentinput] = useState("");
  const [arrayList, setArrayList] = useState([]);
  const handleChange = (e) => {
    setCurrentinput(e.target.value);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setArrayList([...arrayList, currentInput]);
      setCurrentinput("");
    }
  };
  const handleDelete = (index) => {
    const newArray = [
      ...arrayList.slice(0, index),
      ...arrayList.slice(index + 1, arrayList.length),
    ];
    setArrayList(newArray);
  };
  return (
    <div className="page">
      <div className="mainInput">
        <input
          className="inputField"
          type="text"
          value={currentInput}
          placeholder="Enter the item name"
          onChange={handleChange}
          onKeyPress={handleEnter}
        />
      </div>
      <div className="itemBox">
        {arrayList &&
          arrayList.map((item, index) => (
            <div className="arrayListBox">
              <p>{item}</p>
              <p onClick={() => handleDelete(index)} className="cross">
                x
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodoList;
