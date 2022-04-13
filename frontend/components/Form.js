import React from 'react'

export default class Form extends React.Component {
  render() {

    const submit = evt => {
      evt.preventDefault()
      this.setState({
        ...this.state,
        task: "",
        completed: false,
      })
    }

    const onChange = evt => {
      console.log(evt.target.value)
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
