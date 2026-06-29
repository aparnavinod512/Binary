import { useRef, useState } from "react";
import { BinarySearchTree } from "./BinarySearchTree";
import Tree from "./Tree";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [highlightedValue, setHighlightedValue] = useState(null);
  const [, setVersion] = useState(0);

  const tree = useRef(new BinarySearchTree());

  function getNumber() {
    if (value.trim() === "") {
      setMessage("Please enter a number.");
      return null;
    }

    return Number(value);
  }

  function handleInsert() {
    const number = getNumber();

    if (number === null) {
      return;
    }

    const inserted = tree.current.insert(number);

    if (inserted) {
      setMessage(`${number} was inserted.`);
      setVersion((currentVersion) => currentVersion + 1);
    } else {
      setMessage(`${number} already exists.`);
    }

    setHighlightedValue(null);
    setValue("");
  }

  function handleSearch() {
    const number = getNumber();

    if (number === null) {
      return;
    }

    const foundNode = tree.current.search(number);

    if (foundNode) {
      setMessage(`${number} was found.`);
      setHighlightedValue(number);
    } else {
      setMessage(`${number} was not found.`);
      setHighlightedValue(null);
    }

    setValue("");
  }

  return (
    <main className="app">
      <h1>Binary Search Tree Visualizer</h1>

      <section className="controls">
        <input
          type="number"
          placeholder="Enter a number"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleInsert();
            }
          }}
        />

        <button onClick={handleInsert}>Insert</button>
        <button onClick={handleSearch}>Search</button>
      </section>

      <p className="message">{message}</p>

      <section className="tree-area">
        <Tree
          root={tree.current.root}
          highlightedValue={highlightedValue}
        />
      </section>
    </main>
  );
}

export default App;