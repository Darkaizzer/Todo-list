import { useState } from "react";
import "./App.css";
import TodoList from "./components/todoList/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [listsItem, setListItems] = useState([
    { id: 1, status:false, text: "Выучить базу JS" },
    { id: 2,  status:false, text: "Выучить базу html" },
  ]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      text: inputText,
    };
    setListItems([...listsItem, newTodo]);
  };
  return (
    <div>
      <h1>Todo List (0/0)</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <input type="submit" />
      </form>
      {listsItem.length ? (
        listsItem.map((element, index) => (
          <TodoList
            listsItem={listsItem}
            setListItems={setListItems}
            number={index}
            key={element.id}
            element={element}
          />
        ))
      ) : (
        <h1>Нет Задач!</h1>
      )}
    </div>
  );
}

export default App;
