import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function addingItem() {
    for (let i = 0; i < items.length; i++)
      if (items[i] === input) {
        alert("Already in Notes")
        setInput("");
        return;
      }

    if (input) {
      setItems((prevValue) => {
        return [...prevValue, input];
      });
      setInput("");
    }
    else
      alert("Enter an item");
  }

  function deleteTask(ind) {
    const newArr = items.filter((_, i) => i !== ind);
    setItems(newArr);
  }

  function editTask(ind) {
    const editedTodo = prompt('Edit the todo:');
    if (editedTodo) {
      let updatedTodos = [];
      for (let i = 0; i < items.length; i++) {
        if (i !== ind)
          updatedTodos[i] = items[i];
        else
          updatedTodos[i] = editedTodo;
      }
      setItems(updatedTodos);
    }
  }

  return (
    <div className="container">

      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
        <button onClick={addingItem}>
          <span>Add</span>
        </button>
      </div>

      <div >
        <ul>
          {items.map((item, index) => (<>
            <li key={index}>
              <span>{item}</span>
            </li>
            <button onClick={() => editTask(index)} className="form-button" style={{ paddingTop: "2px" }}><span>Edit</span></button>
            <button onClick={() => deleteTask(index)} className="form-button2" style={{ paddingBottom: "10px" }}><span>Delete</span></button></>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
