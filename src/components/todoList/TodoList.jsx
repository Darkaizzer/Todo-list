const TodoList = (props) => {
    // console.log(props);di
  return (
    <div className="app">
      <div className="todo-list">
        <strong>{props.element.id}.</strong>
        <span>{props.element.text}</span>
      </div>
      <div className="todo-btn">
        <button>Удалить</button>
      </div>
    </div>
  );
};
export default TodoList