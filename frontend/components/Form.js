import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form>
            <input
              placeholder="type to-do"
            />
            <button>add</button>
          </form>
    )
  }
}
