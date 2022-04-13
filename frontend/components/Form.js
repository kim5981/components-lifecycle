import React from 'react'

export default class Form extends React.Component {
  render() {

    const submit = evt => {
      evt.preventDefault()
      this.props.addTask(evt.target.value, this.state.name)
      this.setState({
        name: "",
        completed: false,
      })
    }

    const onChange = evt => {
      this.setState({
        ...this.state,
        name: evt.target.value
      })
    }

    return (
      <form>
            <input
              placeholder="type to-do"
              onChange={ onChange }
            />
            <button onClick={ submit }>add</button>
          </form>
    )
  }
}
