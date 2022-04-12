import React from 'react'
import Form from "./Form.js";
import List from "./TodoList.js";

const URL = 'http://localhost:9000/api/todos'

let id = 0;
const getId = () => id++

const toDos = [
      {task: "module 2 project", completed: false, id: getId() },
      {task: "have dinner", completed: false, id: getId() },
      {task: "throw out trash", completed: false, id: getId() },

    ]

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
          <h1>To-Do List</h1>
          <List toDos={ toDos }/>
          <Form />
          <button>clear</button>



      </div>
    )
  }
}
