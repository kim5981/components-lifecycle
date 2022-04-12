import React from 'react'

export default class TodoList extends React.Component {
  render() {
    return (
      <div className="tasks">
            <h2>Tasks: </h2>
            <ul>
              { this.props.toDos.map( todo => {
                return <li key={ todo.id } className={ `${ todo.completed }` }> { todo.task } </li>
              } ) }
            </ul>
          </div>
    )
  }
}
