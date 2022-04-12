import React from 'react'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
          <h1>To-Do List</h1>

          <div className="tasks">
            <h2>Tasks: </h2>
            <ul>
              <li> module 2 project </li>
              <li> have dinner </li>
            </ul>
          </div>
          <form>
            <input
              placeholder="type to-do"
            />
            <button>add</button>
          </form>

          <button>clear</button>



      </div>
    )
  }
}
