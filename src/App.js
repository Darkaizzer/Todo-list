import { useState } from "react";
import "./App.css";
import TodoList from "./components/todoList/TodoList";

function App() {
  let [plus, setPlus] = useState(0)
  let [inputText,setInputText] = useState('hello')
  
  // console.log(state);
  const listsItem = [
    { id: 1, text: "Выучить базу JS" },
    { id: 2, text: "Выучить базу html" },
    { id: 3, text: "Выучить базу css" },
    { id: 4, text: "Выучить базу react" },
  ];
  // let result = 0
  const onAdd = () => {
    setPlus(plus + 1);
   
    // result += 1
    // console.log(result);
  }
  const onMinus = () => {
    setPlus(plus - 1);
  }
  const onInputChange = (event) => {
    setInputText(event.target.value)
  }
  return (
    <div>
      <h1>{inputText}</h1>
      <input type='text' value={inputText} onChange= {onInputChange} />
      <h1>{plus}</h1>
      <button onClick={onAdd}> + increment</button>
      <button onClick={onMinus}> - decrement</button>
      {listsItem.map((element) => (
        <TodoList key={element.id} element={element} />
      ))}
    </div>
  );
}

export default App;
