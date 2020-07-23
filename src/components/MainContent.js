import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todoData"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261


class MainContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: todosData,
      character: {},
      loading: false
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(id) {
    this.setState(prevState => {
      return prevState.todoList.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
    })
  }

  render() {
    const todoComponents = this.state.todoList.map(item => <TodoItem key={item.id} todo={item}
                                                                     handleChange={this.handleChange}/>)
    return (
      <div className="todo-list">
        {todoComponents}
      </div>
    )
  }
}

export default MainContent
