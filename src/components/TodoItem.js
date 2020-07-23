import React from "react"

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.todo.completed}
             onChange={() => props.handleChange(props.todo.id)}/>
      <p className={props.todo.completed ? "completed" : null}>
        {props.todo.text}
      </p>
    </div>
)
}

export default TodoItem
