import React, { useState } from "react";
import axios from "axios";

interface Task {
  id: string;
  task: string;
  completed?: boolean;
}
const backendURL = "localhost:8000/";
const List = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  function handleEditItem(i: number, value: string) {
    const updatedItems = [...items];
    updatedItems[i] = value;
    setItems(updatedItems);
    setEditIndex(null);
  }
  return (
    <div style={{}}>
      <h1>List</h1>
      <input
        type="text"
        placeholder="Add item"
        onChange={(event) => setNewItem(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            axios.post(backendURL + "/add");
            setItems([...items, newItem]);
            setNewItem("");
          }
        }}
        value={newItem}
      />
      {items.length > 0 ? (
        <ul>
          {items.map((item, i) => (
            <li>
              {editIndex === i ? (
                <li>
                  <input
                    autoFocus
                    value={item}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      const updatedItems = [...items];
                      updatedItems[i] = event.target.value;
                      setItems(updatedItems);
                    }}
                    onKeyDown={(event: any) =>
                      event.key === "Enter" &&
                      handleEditItem(i, event.target.value)
                    }
                  ></input>
                  <button
                    onClick={(event) => {
                      setItems(items.filter((item, index) => index !== i));
                    }}
                  >
                    Delete
                  </button>
                </li>
              ) : (
                <li key={i} onClick={() => setEditIndex(i)}>
                  {item}
                </li>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>there are no items in the list </p>
      )}
    </div>
  );
};

export default List;
