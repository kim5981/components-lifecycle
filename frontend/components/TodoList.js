import React from 'react'
import Task from "./Todo.js";

export default class TodoList extends React.Component {
  render() {
    return (
      <div className="tasks">
            <h2>Tasks: </h2>
            <ul>
              { this.props.toDos.map( todo => {
                return <Task key={ todo.id } todo={ todo }/>
              } ) }
            </ul>
          </div>
    )
  }
}
