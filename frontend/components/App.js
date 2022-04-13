import React from 'react'
import Form from "./Form.js";
import List from "./TodoList.js";
import axios from "axios"


const URL = "http://localhost:9000/api/todos";

let id = 0;
const getId = () => id++

export default class App extends React.Component {

  state = {
    toDos: []
  }

  fetchTasks = () => {
    axios.get(URL)
    .then( res => {
      this.setState({ ...this.state, toDos: res.data.data }) 
      })
    .catch( err => console.error(err))
  }

  addTask = (evt, task) => {
    const newTask = {
      id: getId(),
      name: task,
      completed: false 
    }
    this.setState({
      ...this.state,
      toDos: [...this.state.toDos, newTask]
    })
  }

  toggleCompletedDisplay = () => {

  }
  
  componentDidMount () {
    //fetch to-do array from server
    console.log("component has mounted")
    
    this.fetchTasks()
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
