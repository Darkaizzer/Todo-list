import { useState } from "react";

const TodoList = (props) => {
  const [isInputShow, setInputShow] = useState(false);
  const onDeleteTask = () => {
    let deletedItem = props.listsItem.filter((item) => {
      return item.id !== props.element.id;
    });
    props.setListItems(deletedItem);
  };
  const onEditMode = () => {
    setInputShow(!isInputShow)
  };

  const onChecked = () => { 
    let checkedItem = props.listsItem.map(item => {
      if (item.id === props.element.id) {
        return{...item, status: !item.status}
      }
      return item
    })
     props.setListItems(checkedItem)
  }
  return (
    <div className="app">
      {isInputShow ? (
        <form>
          <input type="text" />
          <button>Сохранить</button>
        </form>
      ) : (
        <div className="todo-list">
          <strong>{props.number + 1}.</strong>
            <input type="checkbox" checked={props.element.status} onChange={onChecked} />

          <span className={props.element.status === true ? 'line' : ''}>{props.element.text}</span>
        </div>
      )}

      <div className="todo-btn">
        <button onClick={onEditMode}>Редактировать</button>
        <button onClick={onDeleteTask}>Удалить</button>
      </div>
    </div>
  );
};
export default TodoList;
