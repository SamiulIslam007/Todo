import { useState } from "react";
import List from "./List";
const ToDo = () => {
  let [name, setName] = useState("");
  let [items, setItems] = useState(["apple", "banana"]);
  const changed = (event) => {
    setName(event.target.value);
  };

  const clicked = () => {
    setItems((prev) => {
      return [...prev, name];
    });
    setName("");
  };
  const deleted = (id) => {
    setItems((oldValue) => {
      return oldValue.filter((value, index) => {
        return id !== index;
      });
    });
  };

  const deleteAll = () => {
    return setItems([]);
  };

  return (
    <>
      <div className="head">
        <h1 className="headline">Todo App</h1>
        <p className="credit">Created By Samiul Islam</p>
      </div>
      <div className="containerr">
        <div className="sub_container">
          <div className="input">
            <input
              type="text"
              placeholder="Enter something "
              className="input_field"
              onChange={changed}
              autoFocus={false}
              value={name}
            />
            <button className="btn" onClick={clicked}>
              Add
            </button>
          </div>
          <div className="lists">
            {items.map((value, index) => {
              return (
                <List value={value} del={deleted} key={index} id={index} />
              );
            })}

            <button className="deleteAll" onClick={deleteAll}>
              Delete All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
