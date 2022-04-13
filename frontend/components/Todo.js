import React from 'react'



  
 const switchClass = () => { 
  const toggleClass = document.querySelector(".task"); 
  document.querySelector(".task").addEventListener("click", () => {
    toggleClass.className.textContent === false ? 
    !toggleClass.className : toggleClass.className
  })
}

  
export default class Todo extends React.Component {

  render() {
    const { todo } = this.props
    return (
      <li key={ todo.id } className={ `${ switchClass } task ` }> { todo.name } </li>
    )
  }
}
