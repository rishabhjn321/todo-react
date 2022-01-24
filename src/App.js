import React from "react";
import Joke from "./joke";
import TodosData from "./todoData";
import TodoItems from "./TodoItems";
import style from './style.css';



class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: TodosData
    }
    this.handleChange = this.handleChange.bind(this)
 }
 handleChange(id){
   this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if (todo.id ===id) {
          todo.completed = !todo.completed 
        }
        return todo
      }

      )
      return{todos:updateTodos}
   })
   }
     render(){
      const todoitem = this.state.todos.map(item =>
        <TodoItems key={item.id} item={item} handleChange={this.handleChange}/>)
  return(
    <div className="todo-list">
    {todoitem}

    </div>
  )
     }
}

export default App;