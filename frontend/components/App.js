import React from 'react'
import Form from "./Form.js";
import List from "./TodoList.js";
import axios from "axios"

const fetchTasks = () => {
  return axios.get("http://localhost:9000/api/todos")
  .then( res => { return res.data })
  .catch( err => console.error(err))
}

let id = 0;
const getId = () => id++

export default class App extends React.Component {

  state = {
    toDos: []
  }

  addTask = (evt, task) => {
    const newTask = {
      id: getId(),
      name: task,
      completed: false 
    }
    // get input values from form (task, id) 
    //set state with those values
    this.setState({
      ...this.state,
      toDos: [...this.state.toDos, newTask]
    })
  }

  toggleClass = () => {
  }


  toggleCompletedDisplay = () => {

  }

  
  componentDidMount () {
    console.log("component has mounted")
    
    fetchTasks()
    .then( res => {
      this.setState({
        toDos: res.data
      })
      console.log(res.data)
    })
  }

  render() {
    
    return (
      <div className="app">
          <h1>To-Do List</h1>
          <List toDos={ this.state.toDos }/>
          <Form addTask={ this.addTask } />
          <button>clear</button>



      </div>
    )
  }
}
